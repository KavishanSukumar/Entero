import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import HelpIcon from "@mui/icons-material/Help";
import Button from "../../button/Button";
import { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const package_URL = "http://localhost:4000/api/serviceprovider/sp_packages";
const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  bgcolor: "background.paper",
  borderRadius: 3,
  borderColor: 'primary.main',
  transform: "translate(-50%, -50%)",
  height: 630,
  boxShadow: 24,
  p: 4,

};

export default function PackageCard(props) {


  const [userid, setuserid] = useState(props.uid)
  console.log('user id = ' + userid);
  const [popup, setPopup] = useState(false);
  const [value, setValue] = React.useState(0);
  const handlePopup = () => {
    setPopup(!popup);
  };

  //for insert package popup
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


//for edit package popup
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


  //get packages
  const [packages, setpackages] = useState([]);

  async function getpackages(uid) {

    try {
      let y=package_URL+"/"+uid
      const res = await axios.get(y)
      
      setpackages(res.data);
      console.log('packages are got');

    } catch (error) {
      console.error(error.message);
      console.log('error in pkagecards getting packages');
    }
  }
  useEffect(() => {
    getpackages(userid);

  }, []);




// ----------- start of initialization of data for add package -------------
  const [itemList, setitemList] = useState([""]);


  const handleItemChange = (e, index) => {
    const { value } = e.target;
    const list = [...itemList];
    list[index] = value;
    setitemList(list);
    console.log('item list ', list);

  };

  const handleItemRemove = (index) => {
    const list = [...itemList];
    list.splice(index, 1);
    setitemList(list);
  };

  const handleItemAdd = () => {
    setitemList([...itemList, {}]);
  };


  const [packname, setPackname] = useState("");
  const [packdes, setPackdes] = useState("");
  const [packprice, setPackprice] = useState();

  const handlepackname = (e) => {

    setPackname(e.target.value);
    console.log('packages', packages);

  };
  const handlepackdes = (e) => {

    setPackdes(e.target.value);
  };
  const handlepackprice = (e) => {

    setPackprice(e.target.value);
  };
// ----------- end of initialization of data for add package -------------

  //add package
  const onsubmitform = async (e) => {
    e.preventDefault();
    const x = package_URL + "/";
    try {
      const res = await axios.post(x, { packname, packdes, packprice, itemList, userid })
      console.log(res);
      window.alert('Insert Successful');
      window.location = '/home'


    } catch (error) {
      console.log('this is error ----->' + error.message);
      console.log(packname, ' ', packdes, ' ', packprice, ' ', itemList, ' ', userid);

    
    }

  }

  
 //delete a package
  const deletepackage = async (packid) => {

   console.log('packid',packid);
    const x = package_URL + "/"+ packid;
    if(window.confirm('Do you want to delete the package?')===true){
      try {
      
        const res = await axios.delete(x)
        console.log(res);
        window.alert('Delete Successful');
        window.location = '/home'
  
  
      } catch (error) {
        console.log('this is error in deleting package----->' + error.message);
        
      }
     
  
    }else{

    }
  }   
    


// ----------- start of initialization of data for Edit package -------------
const [thepackageid, setthepackageid] = useState()
const [itemList1, setitemList1] = useState([""]);

const handleItemChange1 = (e, index) => {
  const {value} = e.target;
  console.log('value',value);
  const list1 = [...itemList1];
  list1[index] = value;
  setitemList1(list1);
  console.log(' new item list ', list1,'index',index,'value',value);

};

const handleItemRemove1 = (index) => {
  const list1 = [...itemList1];
  list1.splice(index, 1);
  setitemList1(list1);
};

const handleItemAdd1 = () => {
  setitemList1([...itemList1,""]);
};


const [packname1, setPackname1] = useState("");
const [packdes1, setPackdes1] = useState("");
const [packprice1, setPackprice1] = useState();

const handlepackname1 = (e) => {

  setPackname1(e.target.value);
  console.log('packages', packages);

};
const handlepackdes1 = (e) => {

  setPackdes1(e.target.value);
};
const handlepackprice1 = (e) => {

  setPackprice1(e.target.value);
};
// ----------- end of initialization of data for edit package -------------

//edit package
const onsubmitform1 = async (e) => {
  e.preventDefault();
  const x = package_URL + "/";
  try {
    const res = await axios.put(x, { packname1, packdes1, packprice1, itemList1, userid ,thepackageid})
    console.log(res);
    window.alert('Package is Updated Successfully');
    window.location = '/home'


  } catch (error) {
    console.log('this is error ----->' + error.message);
    

  
  }

}
// set padding to description

function setpadding(val){
  
 if(val.length<113){
//   // for (let i = 0; i < 113-val.length; i++) {
//   //   val = val + '0'
//   // }
//   console.log('val lenght -> ',val.length );
//   var val2 = val + '\0'.repeat(113-val.length)
//  console.log('new val lenght',val2.length);
  return ( <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200 ">{val} </p>)
  
 }else{
  return ( <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">{val}</p>)
 }
}

  return (

    <>
      {/* popup for insert new package */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-auto h-screen">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <p className="font-bold text-lg"> New Package</p>
            </div>
            <div className="block p-6 rounded-lg shadow-lg shadow-black bg-white max-w-lg w-96 ">

              <form action="" onSubmit={onsubmitform}>
                <div className="form-group mb-6">
                  <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Package Name</label>
                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e) => handlepackname(e)} value={packname} />
                </div>
                <div className="form-group mb-6">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Description</label>
                  <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    onChange={(e) => handlepackdes(e)} value={packdes} />
                </div>
                <div className="form-group mb-6">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Price</label>

                  <input type="text" prefix={"LKR"} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    onChange={(e) => handlepackprice(e)} onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }} value={packprice} />
                </div>
                <div className="form-group mb-6 flex gap-1 flex-col">
                  <div className="flex flex-row justify-between">
                    <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">What's included </label>

                  </div>
                  <div className="form-field">

                    {itemList.map((singleItem, index) => (
                      <div key={index} className="items flex gap-3 ">
                        <div className="first-division pb-2 w-[92%]">
                          <input
                            name="item"
                            type="text"
                            id="item"
                            value={singleItem.item}
                            onChange={(e) => handleItemChange(e, index)}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            required
                          />
                          {itemList.length - 1 === index && itemList.length < 4 && (
                            <button
                              type="button"
                              title="add an item"
                              onClick={handleItemAdd}
                              className="add-btn pt-3  px-1     text-green-500  font-medium 
                              text-lg  leading-tight   rounded-lg  hover:text-green-800 "
                            >
                              <span> <strong>+</strong>  <strong className="text-sm">new item</strong> </span>
                            </button>
                          )}
                        </div>
                        <div className="second-division w-[8%]">
                          {itemList.length !== 1 && (
                            <button
                              type="button"
                              title="remove the item"
                              onClick={() => handleItemRemove(index)}
                              className="remove-btn  w-full  px-1     text-red-500  font-medium 
                               text-3xl  leading-tight   rounded-lg   border-red-600  hover:text-red-800
                                  "
                            >
                              <span><strong>-</strong></span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>



                </div>

                <button className="  w-full  px-6  py-2.5  bg-cyan-500  text-white  font-medium 
                 text-xs  leading-tight  rounded-lg  shadow-md  hover:bg-cyan-700 hover:shadow-lg
                    focus:shadow-lg focus:outline-none focus:ring-0  active:bg-cyan-800 
                   active:shadow-lg  transition  duration-150  ease-in-out">Add Package</button>

              </form>
            </div>
          </div>
        </Box>
      </Modal>




       {/* popup for edit the package */}
       <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-auto h-screen">
          {console.log('edit items',itemList1)}
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <p className="font-bold text-lg"> Edit Package</p>
            </div>
            <div className="block p-6 rounded-lg shadow-lg shadow-black bg-white max-w-lg w-96 ">

              <form action="" onSubmit={onsubmitform1}>
                <div className="form-group mb-6">
                  <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Package Name</label>
                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e) => handlepackname1(e)} value={packname1} />
                </div>
                <div className="form-group mb-6">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Description</label>
                  <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    onChange={(e) => handlepackdes1(e)} value={packdes1} />
                </div>
                <div className="form-group mb-6">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Price</label>

                  <input type="text" prefix={"LKR"} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    onChange={(e) => handlepackprice1(e)} onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }} value={packprice1} />
                </div>
                <div className="form-group mb-6 flex gap-1 flex-col">
                  <div className="flex flex-row justify-between">
                    <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">What's included </label>

                  </div>
                  <div className="form-field">

                    {itemList1.map((singleItem, index) => (
                      <div key={index} className="items flex gap-3 ">
                        <div className="first-division pb-2 w-[92%]">
                          <input
                            name="item"
                            type="text"
                            id="item"
                            value={singleItem}
                            onChange={(e) => handleItemChange1(e, index)}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            required
                          />
                          {itemList1.length - 1 === index && itemList1.length < 4 && (
                            <button
                              type="button"
                              title="add an item"
                              onClick={handleItemAdd1}
                              className="add-btn pt-3  px-1     text-green-500  font-medium 
                              text-lg  leading-tight   rounded-lg  hover:text-green-800 "
                            >
                              <span> <strong>+</strong>  <strong className="text-sm">new item</strong> </span>
                            </button>
                          )}
                        </div>
                        <div className="second-division w-[8%]">
                          {itemList1.length !== 1 && (
                            <button
                              type="button"
                              title="remove the item"
                              onClick={() => handleItemRemove1(index)}
                              className="remove-btn  w-full  px-1     text-red-500  font-medium 
                               text-3xl  leading-tight   rounded-lg   border-red-600  hover:text-red-800
                                  "
                            >
                              <span><strong>-</strong></span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>



                </div>

                <button className="  w-full  px-6  py-2.5  bg-cyan-500  text-white  font-medium 
                 text-base  leading-tight  rounded-lg  shadow-md  hover:bg-cyan-700 hover:shadow-lg
                    focus:shadow-lg focus:outline-none focus:ring-0  active:bg-cyan-800 
                   active:shadow-lg  transition  duration-150  ease-in-out">Update</button>

              </form>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="flex flex-col mt-[-50px]">




        <div className="relative max-w-screen-xl mx-auto my-3 px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          <div className="flex flex-row ">
            <button onClick={handleOpen} className="px-4 border border-green-500 rounded-lg hover:border-green-800 hover:bg-green-100">
              <strong className="flex flex-row gap-3 text-green-500 hover:text-green-800 ">
                <p className="text-3xl">+</p>
                <p className="text-lg mt-1">add package</p>
              </strong>
            </button>
          </div>
          
          {packages && packages.map((a) => (
            <div className="flex flex-col gap-2 mt-2 mb-4" key={a.package_id}>
              {console.log('package id --> ',a.package_id)}
         
              <div className="flex flex-row gap-2 justify-end">
                <button onClick={()=>{setthepackageid(a.package_id);
                                      setitemList1(a.items);
                                      setPackname1(a.name);
                                      setPackdes1(a.des);
                                      setPackprice1(a.price);
                                      handleOpen1();}}     
                className="px-4 border border-cyan-500 rounded-lg text-lg hover:border-cyan-800  text-cyan-500 hover:text-cyan-800 hover:bg-cyan-100">
                  Edit
                </button>
                


                <button className="px-4 border border-red-500 rounded-lg hover:border-red-800 text-lg   text-red-500 hover:text-red-800  hover:bg-red-100"
                onClick={()=>deletepackage(a.package_id)}
                >
                  Remove
                </button>
              
               
              </div>



              <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">

                <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12 xl:w-[1000px] lg:w-[600px]">
                  <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                   {a.name}
                  </h3>
                  
                  {setpadding(a.des)}
                  
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        What&#x27;s included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200"></div>
                    </div>
                    <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5 h-20 overflow-y-auto " >


                    {a.items.map((b,index) => (

                      <li className="flex items-start lg:col-span-1" key={index}>
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="#10b981"
                            viewBox="0 0 1792 1792"
                          >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                          </svg>
                        </div>
                        <p className=" text-sm leading-5 text-gray-700 dark:text-gray-200">
                          {b}
                        </p>
                      </li>
                    ))}
                     
                      
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
                    <span>LKR {a.price}</span>
                  </div>
                  <div className="mt-6">
                    
                    <div className="rounded-md shadow m-3">
                      <button
                        type="button"
                        onClick={handlePopup}
                        className="py-2 px-4  bg-cyan-500 hover:bg-blue-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          ))}

<Modal
        open={popup}
        onClose={handlePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-auto h-screen">
          {console.log('edit items',itemList1)}
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <p className="font-bold text-lg"> Edit Package</p>
            </div>
            <div className="block p-6 rounded-lg shadow-lg shadow-black bg-white max-w-lg w-96 ">

              <form action="" onSubmit={onsubmitform1}>
              <div className="mt-6 mb-4">
                        <label
                          for="date"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          placeholder="Date"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label
                          for="time"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          placeholder="Time"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label
                          for="location"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          placeholder="Location"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                        ></input>
                      </div>

                <button className="  w-full  px-6  py-2.5  bg-cyan-500  text-white  font-medium 
                 text-base  leading-tight  rounded-lg  shadow-md  hover:bg-cyan-700 hover:shadow-lg
                    focus:shadow-lg focus:outline-none focus:ring-0  active:bg-cyan-800 
                   active:shadow-lg  transition  duration-150  ease-in-out">Update</button>

              </form>
            </div>
          </div>
        </Box>
      </Modal>

                
          </div>
        </div>
 






    </>

  );
}


