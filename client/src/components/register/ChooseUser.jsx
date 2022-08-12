import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomerRegister from "./CustomerRegister";
import ServiceRegister from "./ServiceRegister";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  m: 3,
  p: 4,
};

function ChooseUser() {
  const [openCustomer, setOpenCustomer] = React.useState(false);
  const [openService, setOpenService] = React.useState(false);

  const handleOpenCustomer = () => setOpenCustomer(true);
  const handleOpenService = () => setOpenService(true);
  const handleCloseCustomer = () => setOpenCustomer(false);
  const handleCloseService = () => setOpenService(false);
  return (
    <>
      <div>
        <Modal
          open={openCustomer}
          onClose={handleCloseCustomer}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="overflow-auto h-screen">
            <CustomerRegister />
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
          open={openService}
          onClose={handleCloseService}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="overflow-auto h-screen">
            <ServiceRegister />
          </Box>
        </Modal>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center font-serif h-auto">
        <div
          onClick={handleOpenCustomer}
          className="relative w-96 h-auto shadow-md rounded-md m-3 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          <div className="flex flex-row justify-center">
            <PersonIcon className="!h-36 !w-36 text-green-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-center py-2">Sign up as</p>
            <p className="text-xl font-bold text-center py-2">Customer</p>
          </div>
        </div>
        <div
          onClick={handleOpenService}
          className="w-96  shadow-md rounded-md m-3 h-auto hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          <div className="flex flex-row justify-center">
            <ManageAccountsIcon className="!h-36 !w-36 text-orange-500" />
          </div>
          <div>
            <p className="text-lg font-bold text-center py-2">Sign up as</p>
            <p className="text-xl font-bold text-center py-2">
              Service Provider
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUser;