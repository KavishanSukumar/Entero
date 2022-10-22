import { useState,useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import Shakir from "../../Shakir.jpg";
import SearchIcon from "@mui/icons-material/Search";

const API_URL = "http://localhost:4000/api/admincustomer"

function AdminCustomers() {
  const [customers,setCustomers]=useState([])
  const [customerDetail,setCustomerDetail]=useState()
  const [popup, setPopup] = useState(false);

  async function fetchCustomers() {
    try {
      const res = await axios.get(API_URL);
      setCustomers(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  

  useEffect(() => {
    fetchCustomers();
  },[]);

  console.log(customers)

  const handlePopup = (customer) => {
    setCustomerDetail(customer);
    setPopup(!popup);
  };

  const changeStatus=async (id)=>{
    try {
      const x = API_URL + "/" + id;
      const res = await axios.put(x);
      console.log(res.data);
      fetchCustomers();
      alert('Status updated')
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
       <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Customer Details
        </h2>
      </div>
      <div className="flex p-1 md:px-4 py-2 ">
        <div className="relative w-64">
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
              placeholder="Search for customers"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      <div
        className={
          popup
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="overflow-y-auto bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[80%] mx-[10%] md:w-[60%] md:mx-[20%] lg:w-[40%] lg:mx-[30%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handlePopup}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row ">
            <div className="flex flex-col  items-center  mb-2 justify-center">
              {/*The image */}
              <div className="p-2">
                <img
                  src={Shakir}
                  alt=""
                  className="w-28 h-28 rounded-full shadow-2xl "
                />
              </div>

              {/*The buttons */}
              <div className="flex flex-col w-44 p-4">
                
                <button className=" border-2 bg-cyan-500 hover:bg-cyan-400  p-1 mb-3 rounded text-white"
                onClick={() => {
                  changeStatus(customerDetail.userid);
                }}>
                  {customerDetail && customerDetail.status==='a'? "Remove":"Activate"}
                </button>
              </div>
            </div>
            <div className=" w-full p-2">
              <p className="text-center text-xl font-bold  mb-2 border-b-2">
                Details
              </p>
              <dl class="text-gray-900 divide-y divide-gray-200 ">
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Name</dt>
                  <dd class="text-md font-semibold">{customerDetail && customerDetail.name}</dd>
                </div>
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Email address</dt>
                  <dd class="text-md font-semibold">{customerDetail && customerDetail.email}</dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Address</dt>
                  <dd class="text-md font-semibold">
                    {customerDetail && customerDetail.address}
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Contact</dt>
                  <dd class="text-md font-semibold">{customerDetail && customerDetail.contact_number}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto justify-center w-full h-screen">
        <table class="min-w-full z-0">
          <thead class="bg-white border-b sticky top-0">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Customer_ID
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Email
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Status
              </th>

              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>
            </tr>
          </thead>
          <tbody className="">
            {customers.length === 0 ? 
              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td colSpan={4} class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">No records yet
            </td>
            </tr>
            : 
              ""
            }
            {customers &&
            customers.map((customer) => (
              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.userid}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {customer.name}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {customer.email}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {customer.status==='a'? "Active":"Blocked"}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => {
                    handlePopup(customer);
                  }}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View
                </button>
                <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => {
                  changeStatus(customer.userid);
                }}>
                  {customer && customer.status==='a'? "Remove":"Activate"}
                </button>
              </td>
            </tr>
            ))}
            

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCustomers;
