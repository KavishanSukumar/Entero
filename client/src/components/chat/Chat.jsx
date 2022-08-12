import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";

function chat() {
  return (
    <div className="flex flex-row mt-14 mb-10 md:mt-0 max-h-screen h-auto">
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
                className="inline-block h-14 w-14 rounded-full ring-2 ring-gray-500"
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/277582841_5239128016098567_5556185992353256575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKp4fnlNOqfC6OxI8ZuGz0AYIcaGARm5ABghxoYBGbkJ_pSaYhzhJ0teluCZKKj-kYsDS0AzDUItxxmzTiIc3k&_nc_ohc=T5QAw0otHBIAX86oCPh&tn=cj98qFRJLNhnK42a&_nc_ht=scontent-sin6-2.xx&oh=00_AT9NDQOLlJHLh61x6xsdiuwxZhlYRUl8QmY-CZndSS1wIw&oe=62FB6324"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">Fabs</p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you shakir for connecting us
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}

          {/* ------------------------------------------------------------ -------------------*/}

          {/* ------------------------------------------------------------ -------------------*/}
          <div className="grid grid-cols-6 p-3 m-3 border-b-2">
            <div>
              <img
                className="inline-block h-14 w-14 rounded-full ring-2 ring-black"
                src="https://pereraandsons.com/assets/img/logo.svg"
                alt=""
              />
            </div>
            <div className="col-span-5 flex flex-col">
              <p className="text-lg font-medium capitalize truncate">
                Perera & Sons
              </p>
              <p className="text-sm italic truncate overflow-hidden">
                Thank you shakir
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------ -------------------*/}

          {/* ------------------------------------------------------------ -------------------*/}
        </div>
      </div>
      <div className=" flex flex-col lg:basis-2/3 basis-full mt-6 ml-3">
        <div className="flex flex-row justify-start items-center border-b-2">
          <ArrowBackIosIcon className="!w-5 !h-10 mr-5 lg:!hidden" />
          <p className="font-serif text-2xl capitalize">Fabs</p>
        </div>
        <div className="mt-3 overflow-auto max-h-screen">
          {/* ------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center justify-start">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/277582841_5239128016098567_5556185992353256575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKp4fnlNOqfC6OxI8ZuGz0AYIcaGARm5ABghxoYBGbkJ_pSaYhzhJ0teluCZKKj-kYsDS0AzDUItxxmzTiIc3k&_nc_ohc=T5QAw0otHBIAX86oCPh&tn=cj98qFRJLNhnK42a&_nc_ht=scontent-sin6-2.xx&oh=00_AT9NDQOLlJHLh61x6xsdiuwxZhlYRUl8QmY-CZndSS1wIw&oe=62FB6324"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                We have package related to you requirements. and those are
                vissible in the portfolio section. You can refer them to us for
                more details.
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center justify-end">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="/assets/images/Shakir.jpg"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                Thank you very much...
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/277582841_5239128016098567_5556185992353256575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKp4fnlNOqfC6OxI8ZuGz0AYIcaGARm5ABghxoYBGbkJ_pSaYhzhJ0teluCZKKj-kYsDS0AzDUItxxmzTiIc3k&_nc_ohc=T5QAw0otHBIAX86oCPh&tn=cj98qFRJLNhnK42a&_nc_ht=scontent-sin6-2.xx&oh=00_AT9NDQOLlJHLh61x6xsdiuwxZhlYRUl8QmY-CZndSS1wIw&oe=62FB6324"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                If you want any futher detail please contact us
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="flex flex-row p-3 m-3 items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/277582841_5239128016098567_5556185992353256575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKp4fnlNOqfC6OxI8ZuGz0AYIcaGARm5ABghxoYBGbkJ_pSaYhzhJ0teluCZKKj-kYsDS0AzDUItxxmzTiIc3k&_nc_ohc=T5QAw0otHBIAX86oCPh&tn=cj98qFRJLNhnK42a&_nc_ht=scontent-sin6-2.xx&oh=00_AT9NDQOLlJHLh61x6xsdiuwxZhlYRUl8QmY-CZndSS1wIw&oe=62FB6324"
                alt=""
              />
            </div>
            <div className="flex ">
              <p className="text-sm italic ml-3 max-w-md">
                Thank you shakir for connecting us...
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
