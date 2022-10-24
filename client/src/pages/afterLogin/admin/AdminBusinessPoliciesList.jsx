import React, { Fragment, useEffect, useState } from "react";
import AdminBusinessPoliciesEdit from "./AdminBusinessPoliciesEdit";

const AdminBusinessPoliciesList = () => {
  const [policies, setPolicies] = useState([]);
   
   

    //delete todo function
  
    const deletePolicies = async id => {
      try {
        const deletePolicies = await fetch(`http://localhost:4000/api/bpolicies/${id}`, {
          method: "DELETE"
        });
  
        setPolicies(policies.filter(policies => policies.bpolicies_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };

    const getPolicies = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/bpolicies");
        const jsonData = await response.json();
  
        setPolicies(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      getPolicies();
    }, []);
  
    console.log(policies);
  
  return (
    <Fragment>
 {/* <AdminBusinessPoliciesEdit policies={policies} /> */}


    {/* {" "} */}
    <table class="table-auto ml-96">
      {/* <thead>
        <tr>
          <th>Policies</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead> */}
      <tbody>
        
        {policies.map(policies => (
          <tr key={policies.bpolicies_id}>
            <td>{policies.bpolicies}</td>
            <td>
              <AdminBusinessPoliciesEdit policies={policies} />

            </td>
            {/* <td>
              <button
                className="btn btn-danger"
                onClick={() => deletePolicies(policies.bpolicies_id)}
              >
                Delete
              </button>
            </td> */}
            
          </tr>
          // <tr key={policies.bpolicies_id}>
          //   {policies.bpolicies}
          // </tr>
        ))}
      </tbody>
    </table>

    {/* <h2 className="content-center text-center text-sm italic truncate overflow-hidden">Privacy Policy Entero</h2><br />
    */}
  </Fragment>
  );
};

export default AdminBusinessPoliciesList;