import React, { Fragment, useEffect, useState } from "react";
import Button from "../../../components/button/Button";

const AdminBusinessPoliciesEdit = ({ policies }) => {
  const [bpolicies, setBpolicies] = useState(policies.bpolicies);

  //edit description function

  const updatepolicies = async (e) => {
    e.preventDefault();
    try {
      const body = { bpolicies };
      const response = await fetch(
        `http://localhost:4000/api/bpolicies/${policies.bpolicies_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* <button
        type="button"
        className="btn border py-2 bg-cyan-500 hover:bg-cyan-400 text-white
        hover:drop-shadow-xl"
        data-toggle="modal"
        data-target={`#id${policies.bpolicies_id}`}
        color="#03C9D7"
        bgColor=""
        // text="Edit"
        borderRadius="10px"
        size="md"
        width="300px"
       
      >
        Edit
      </button> */}

      {/* 
        id = id10
      */}
      <div
        class="modal ml-5"
        id={`id${policies.bpolicies_id}`}
        onClick={() => setBpolicies(policies.bpolicies)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h4 class="modal-title">Edit Business and Policies</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setBpolicies(policies.bpolicies)}
              >
                &times;
              </button> */}
            </div>

            <div class="modal-body">
              <textarea
                // type="text"
                // className="form-control w-full"
                // rows="5"
                // columns="50"
                // className="form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700 
                //      bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out
                //        m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13"
                //     
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-6 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                rows="10" 
                 cols="50"
                value={bpolicies}
                onChange={(e) => setBpolicies(e.target.value)}
              />
            </div>

            <div className="modal-footer justify-center ">
              <button
                 type="button"
                 className="justify-center inline-block self-end bg-cyan-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-cyan-400 "
                 
                data-dismiss="modal"
                onClick={(e) => updatepolicies(e)}
              >
                Save Changes
              </button>
              {/* <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setBpolicies(policies.bpolicies)}
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminBusinessPoliciesEdit;
