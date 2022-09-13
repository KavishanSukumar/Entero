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
      <button
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
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${policies.bpolicies_id}`}
        onClick={() => setBpolicies(policies.bpolicies)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Business and Policies</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setBpolicies(policies.bpolicies)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <textarea
                type="text"
                className="form-control w-full"
                rows="5"
                columns="50"
                value={bpolicies}
                onChange={(e) => setBpolicies(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                 type="button"
                 className="btn border py-2 bg-cyan-500 hover:bg-cyan-400 text-white
                 hover:drop-shadow-xl"
                
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
