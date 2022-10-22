import React, { useEffect,useState } from "react";
import {Link,useParams} from "react-router-dom";
import axios from "axios"




function EmailVerify() {
    const [verifyMessage,setVerifyMessage]=useState('')
    const urlParameters=useParams()

    useEffect(() => {
        async function verifyEmail(){
            try {
                const res = await axios.post(`http://localhost:4000/api/customer/${urlParameters.userid}/${urlParameters.token}`);
                setVerifyMessage(res.data.message);
      
            } catch (error) {
                console.log(error);

            }
        };
        verifyEmail()
      }, []);

  return (
    <div>
      {verifyMessage && <div><h3>{verifyMessage}</h3><Link to="/home">Go to the home page</Link></div>}
      
    </div>
  );
}

export default EmailVerify;
