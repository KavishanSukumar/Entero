import React, { Fragment, useState } from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../../../documents/dummy";
import PageHeader from "../../../components/PagesHeader/PageHeader";
import Button from "../../../components/button/Button";
import AdminHeader from "../../../components/header/AdminHeader";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
const AdminBusinessPolicies = () => {

  const [bpolicies, setBpolicies] = useState();

  const onSubmitForm = async e => {
    e.preventDefault();
  try {
    const body = { bpolicies };
    const response =await fetch("http://localhost:4000/api/bpolicies", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(body)
    });
  
    window.location = '/';
    console.log(response);
  }catch (err) {
    console.error(err.message);
  }
  
  };


  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <div
          className="w-full p-2 pb-48 pt-12 pl-24
        bg-slate-100"
        >
          {/* ---only admin can this div-(start)--- */}
          <div
            className="m-2 md:m-10 mt-24 p-2
          md:p-10 bg-white rounded-3xl"
          >
            <div
              className="flex m-5 flex-wrap 
            gap-1"
            >
              <div>
                <PageHeader title="Edit Business Policies" />
              </div>

              <div className="ml-20 flex flex-wrap lg:flex-nowrap justify-center">
                <div className="justify-center">
                  <Button
                    color="white"
                    bgColor="#03C9D7"
                    //  bgColor={currentColor}
                    text="Edit"
                    borderRadius="10px"
                    size="md"
                    width="300px"
                    // margin-right="200px"
                  />
                </div>
              </div>
            </div>
            <EditorData />

            {/* 
            <RichTextEditorComponent>   
            <EditorData />
              <Inject
                services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
              />
              
            </RichTextEditorComponent> */}
          </div>
          <Fragment>
          <h1 className="text-center mt-5">Edit from here</h1>
          <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={bpolicies} onChange={e =>setBpolicies(e.target.value)} />
            <button className="btn btn-success">Add</button>
          </form>
        </Fragment>
          {/* ---only admin can this div-(end)--- */}
        </div>
      </div>
    </div>
  );
};

export default AdminBusinessPolicies;
