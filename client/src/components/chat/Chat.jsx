import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";

function chat() {
  return (
    <div className="flex flex-row m-16 max-h-screen">
      <div className="hidden lg:flex flex-col basis-1/3  max-h-screen border-r-2 ">
        {/*----------------------------------- Search Bar------------------------------- */}
        <div className="mt-6 ml-3 mr-1">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon
                className="!h-5 !w-5 fill-slate-300"
                viewBox="0 0 20 20"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for Chats..."
              type="text"
              name="search"
            />
          </label>
        </div>
        {/* ---------------------------------------------------------------------------- */}

        {/* ---------------------------------Chat user-------------------------------- */}
        <div className="overflow-auto max-h-min  mt-3">
          {/* -------------------------------------------------------------------------- */}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-gray-500"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                kavishan sukumar
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur labore totam fuga laboriosam modi
                nihil corporis quasi consequatur illum molestiae officia,
                distinctio nam obcaecati fugit quis earum maiores iusto.
                Nostrum.
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Shivakumar Athauda Rallage Priskila Athauda
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Shakir Saheel
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Senal Punsara
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Yonali Fernando
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Yonali Fernando
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Yonali Fernando
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Yonali Fernando
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                class="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Yonali Fernando
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you kavishan
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}
        </div>
      </div>
      <div className=" flex flex-col lg:basis-2/3 basis-full mt-6 ml-3">
        <div className="flex flex-row justify-start items-center border-b-2">
          <ArrowBackIosIcon className="!w-5 !h-10 mr-5 lg:!hidden" />
          <p className="font-serif text-2xl capitalize">kavishan Sukumar</p>
        </div>
        <div className="mt-3 overflow-auto max-h-screen">
          {/* ------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center justify-start">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                Thank you kavishan Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla dolorem aspernatur aliquid? Voluptate
                sit, ratione consequuntur voluptas sint ex veniam dolore esse
                consectetur quae magnam impedit, voluptatem, iste maiores
                exercitationem? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde expedita natus quae nisi voluptas
                quisquam. Fugit perferendis voluptas tenetur, suscipit minima
                illum ab possimus iure fuga. Magni iure ea temporibus provident
                possimus, deserunt vero, maiores distinctio sunt pariatur in
                similique error voluptas sapiente facere quis veritatis,
                reprehenderit commodi! Sit, nemo!
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center justify-end">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                Thank you kavishan Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla dolorem aspernatur aliquid? Voluptate
                sit, ratione consequuntur voluptas sint ex veniam dolore esse
                consectetur quae magnam impedit, voluptatem, iste maiores
                exercitationem? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde expedita natus quae nisi voluptas
                quisquam. Fugit perferendis voluptas tenetur, suscipit minima
                illum ab possimus iure fuga. Magni iure ea temporibus provident
                possimus, deserunt vero, maiores distinctio sunt pariatur in
                similique error voluptas sapiente facere quis veritatis,
                reprehenderit commodi! Sit, nemo!
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                Thank you kavishan Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla dolorem aspernatur aliquid? Voluptate
                sit, ratione consequuntur voluptas sint ex veniam dolore esse
                consectetur quae magnam impedit, voluptatem, iste maiores
                exercitationem? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde expedita natus quae nisi voluptas
                quisquam. Fugit perferendis voluptas tenetur, suscipit minima
                illum ab possimus iure fuga. Magni iure ea temporibus provident
                possimus, deserunt vero, maiores distinctio sunt pariatur in
                similique error voluptas sapiente facere quis veritatis,
                reprehenderit commodi! Sit, nemo!
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                Thank you kavishan Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla dolorem aspernatur aliquid? Voluptate
                sit, ratione consequuntur voluptas sint ex veniam dolore esse
                consectetur quae magnam impedit, voluptatem, iste maiores
                exercitationem? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde expedita natus quae nisi voluptas
                quisquam. Fugit perferendis voluptas tenetur, suscipit minima
                illum ab possimus iure fuga. Magni iure ea temporibus provident
                possimus, deserunt vero, maiores distinctio sunt pariatur in
                similique error voluptas sapiente facere quis veritatis,
                reprehenderit commodi! Sit, nemo!
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
        </div>
        <div className="flex flex-row mt-5">
          <div className="basis-full">
            <label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Type a message..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="flex items-center">
            <span>
              <SendIcon
                className="!h-10 !w-10 fill-lime-600 hover:fill-lime-500"
                viewBox="0 0 20 20"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chat;
