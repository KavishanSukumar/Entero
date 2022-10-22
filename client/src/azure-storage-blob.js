import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

const containerName = "enterofiles";
const sasToken =
  "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2022-11-30T20:32:43Z&st=2022-10-17T12:32:43Z&spr=https,http&sig=6Au834en%2FPZbF0l4Wt3AtvQtRA67bMWT8zL0sW2PNcU%3D";
const storageAccountName = "enterofilestorage";

export const isStorageConfigured = () => {
  return !storageAccountName || !sasToken ? false : true;
};

export const getBlobsInContainer = async () => {
  const returnedBlobUrls = [];
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  const containerClient = blobService.getContainerClient(containerName);

  for await (const blob of containerClient.listBlobsFlat()) {
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
};

const createBlobInContainer = async (containerClient, file, userid) => {
  const blobClient = containerClient.getBlockBlobClient(userid);

  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  await blobClient.uploadData(file, options);
};

const uploadFileToBlob = async (file, userid) => {
  if (!file) return [];

  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: "container",
  });

  await createBlobInContainer(containerClient, file, userid);
  return getBlobsInContainer();
};

export default uploadFileToBlob;
