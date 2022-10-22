

import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import HelpIcon from "@mui/icons-material/Help";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";
// import * as React from "react";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



const API_URL = "http://localhost:4000/api/serviceprovider/portfoliosp";
const API_URL2 = "http://localhost:4000/api/serviceprovider/portfoliocontact";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 34,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#0ae600',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 15,
    height: 14,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 100,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export default function Contact(props) {
  const handle = () => {
    console.log("hello");
  };
  const [userid, setUserid] = useState(props.uid);
  console.log('this is user id in portfolio/contact ==== ' + userid);
  console.log('this is appoint check from edit portfolio' + props.appcheck);
  console.log('this is chat check from edit portfolio' + props.chatcheck);
  const [popup, setPopup] = useState(false);
  const [value, setValue] = React.useState(0);
  const handlePopup = () => {
    setPopup(!popup);
  };


  //get isappoint_check 

  const [appointcheck, setAppointcheck] = useState(props.appcheck);
  const [chatcheck, setChatcheck] = useState(props.chatcheck);
  




  console.log('this is appointcheck  = ' + appointcheck);
  console.log('this is chatcheck  = ' + chatcheck);

// appointcheck
  const handleAppointCheck =  async () => {
  
    const x = API_URL2 + "/" + userid;
    try {
      const res = await axios.put(x, { appointcheck:!appointcheck, chatcheck })
      console.log(res);
      if(appointcheck===true){
        alert('Disabled Appointment');
      }else{
        alert('Enabled Appointment');
      }
      
      window.location = '/home';

    } catch (error) {
      console.log('this is error ----->' + error.message);
    }

  };


// chatcheck
  const handleChatCheck =  async () => {
    const x = API_URL2 + "/" + userid;
    try {
      const res = await axios.put(x, { appointcheck, chatcheck:!chatcheck })
      console.log(res);
      if(chatcheck===true){
        alert('Disabled Chat');
      }else{
        alert('Enabled Chat');
      }
      window.location = '/home';

    } catch (error) {
      console.log('this is error ----->' + error.message);
    }
    
  };





  const onsubmitform = async (e) => {
    e.preventDefault();
    const x = API_URL2 + "/" + userid;
    try {
      const res = await axios.put(x, { appointcheck, chatcheck })
      console.log(res);
      alert(' updated ');
      window.location = '/home';

    } catch (error) {
      console.log('this is error ----->' + error.message);
    }

  }



  return (
   <div>
      <div className="mt-3 flex flex-col justify-evenly gap-3">
        <div className="flex flex-row justify-between bg-slate-50 p-3 rounded-lg">
          <div class="bg-[#BAE6FD] w-56 justify-center flex rounded-lg py-5 px-6  text-base text-[#0369A1] font-bold " >
            <p className="text-lg">Appointment</p>

          </div>
          {console.log('thid is inside of return in contact')}
          <div class="flex justify-center mt-5">

            <FormGroup >
              <Stack direction="row" spacing={1} alignItems="center">
                <p className="text-lg">disable</p>
              
              <AntSwitch 
              defaultChecked={appointcheck}
              onChange={handleAppointCheck}    
              inputProps={{ 'aria-label': 'ant design' }} />
              
                <p className="text-lg">enable</p>
              </Stack>
            </FormGroup>


          </div>
        </div>

        <div className="flex flex-row justify-between  bg-slate-50 p-3 rounded-lg">
          <div class="bg-blue-100 w-56 justify-center flex rounded-lg py-5 px-6 font-bold text-base text-blue-800 " >
            <p className="text-lg">Chat</p>
          </div>

          <div class="flex justify-center mt-5">
            <FormGroup>
              <Stack direction="row" spacing={1} alignItems="center">
              <p className="text-lg">disable</p>
                <AntSwitch defaultChecked={chatcheck}     onChange={handleChatCheck} inputProps={{ 'aria-label': 'ant design' }} />
                <p className="text-lg">enable</p>
              </Stack>
            </FormGroup>
          </div>
        </div>
      </div>
      
    </div>
  );
}







// import React, { useState, useEffect } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import HelpIcon from "@mui/icons-material/Help";
// import Button from "../button/Button";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { AiOutlineClose } from "react-icons/ai";
// import Shakir from "../../Shakir.jpg";
// // import * as React from "react";
// import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';



// const API_URL = "http://localhost:4000/api/serviceprovider/portfoliosp";
// const API_URL2 = "http://localhost:4000/api/serviceprovider/portfoliocontact";
// const AntSwitch = styled(Switch)(({ theme }) => ({
//   width: 34,
//   height: 20,
//   padding: 0,
//   display: 'flex',
//   '&:active': {
//     '& .MuiSwitch-thumb': {
//       width: 15,
//     },
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       transform: 'translateX(9px)',
//     },
//   },
//   '& .MuiSwitch-switchBase': {
//     padding: 3,
//     '&.Mui-checked': {
//       transform: 'translateX(12px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#0ae600',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
//     width: 15,
//     height: 14,
//     borderRadius: 6,
//     transition: theme.transitions.create(['width'], {
//       duration: 100,
//     }),
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 18 / 2,
//     opacity: 1,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
//     boxSizing: 'border-box',
//   },
// }));

// export default function Contact(props) {
//   const handle = () => {
//     console.log("hello");
//   };
//   const [userid, setUserid] = useState(props.uid);
//   console.log('this is user id in portfolio/contact ==== ' + userid);
//   console.log('this is appoint check from edit portfolio' + props.appcheck);
//   console.log('this is chat check from edit portfolio' + props.chatcheck);
//   const [popup, setPopup] = useState(false);
//   const [value, setValue] = React.useState(0);
//   const handlePopup = () => {
//     setPopup(!popup);
//   };


//   //get isappoint_check 

//   const [appointcheck, setAppointcheck] = useState(props.appcheck);
//   const [chatcheck, setChatcheck] = useState(props.chatcheck);
  



//   //console.log('eneble appointment -->'+portfolioinfo[0].appointment_enable);

//   console.log('this is appointcheck 2 = ' + appointcheck);
//   const handleAppointCheck =  () => {
//     setAppointcheck(!appointcheck);
//     console.log('------- ' + appointcheck + ' -------');

//   };
//   const handleChatCheck =  () => {
    
//     setChatcheck(!chatcheck);
//     console.log('------- ' + chatcheck + ' -------');
//   };
//   const onsubmitform = async (e) => {
//     e.preventDefault();
//     const x = API_URL2 + "/" + userid;
//     try {
//       const res = await axios.put(x, { appointcheck, chatcheck })
//       console.log(res);
//       alert(' updated ');
//       window.location = '/home';

//     } catch (error) {
//       console.log('this is error ----->' + error.message);
//     }

//   }

//   useEffect(() => {
//     console.log('this is contact page 3');
//   }, [])




//   return (
//     <form action="" onSubmit={onsubmitform} className="flex flex-col gap-5">
//       <div className="mt-3 flex flex-col justify-evenly gap-3">
//         <div className="flex flex-row justify-between bg-slate-50 p-3 rounded-lg">
//           <div class="bg-[#BAE6FD] w-56 justify-center flex rounded-lg py-5 px-6  text-base text-[#0369A1] font-bold " >
//             <p className="text-lg">Appointment</p>

//           </div>
//           {console.log('thid is inside of return in contact')}
//           <div class="flex justify-center mt-5">

//             <FormGroup >
//               <Stack direction="row" spacing={1} alignItems="center">
//                 <p className="text-lg">disable</p>
//                 <AntSwitch defaultChecked={appointcheck} onChange={handleAppointCheck} inputProps={{ 'aria-label': 'ant design' }} />
//                 <p className="text-lg">enable</p>
//               </Stack>
//             </FormGroup>


//           </div>
//         </div>

//         <div className="flex flex-row justify-between  bg-slate-50 p-3 rounded-lg">
//           <div class="bg-blue-100 w-56 justify-center flex rounded-lg py-5 px-6 font-bold text-base text-blue-800 " >
//             <p className="text-lg">Chat</p>
//           </div>

//           <div class="flex justify-center mt-5">
//             <FormGroup>
//               <Stack direction="row" spacing={1} alignItems="center">
//               <p className="text-lg">disable</p>
//                 <AntSwitch defaultChecked={chatcheck} onChange={handleChatCheck} inputProps={{ 'aria-label': 'ant design' }} />
//                 <p className="text-lg">enable</p>
//               </Stack>
//             </FormGroup>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center bg-cyan-50 rounded-xl ">
//         <div className="py-2">
//         <button className="  px-10 py-2.5 bg-cyan-400 text-white font-medium text-lg leading-tight  rounded shadow-md
//          hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"> Submit </button>

//         </div>

//       </div>

//     </form>
//   );
// }

