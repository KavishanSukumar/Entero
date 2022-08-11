import React from 'react';
import { Alignments, HtmlEditor, Image, Inject, Link, QuickToolbar,
RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';


import {EditorData2} from '../../../documents/dummy';
import PageHeader from '../../../components/PagesHeader/PageHeader';
import Button from '../../../components/button/Button';

import Header from '../../../components/header/Header';
// import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';
const TermsCondition = () => {
  return (
    
    <div>
      <Header />

    <div className="w-full p-2 pb-48 pt-12
    bg-slate-100">
        <div className="m-2 md:m-10 mt-24 p-2
      md:p-10 bg-white rounded-3xl">
     
      <div
        className="flex m-5 flex-wrap 
        gap-1"
        >
        <div >
        <PageHeader title="Terms and Condition" />
        </div>
        <div className="ml-20 flex flex-wrap lg:flex-nowrap justify-center">

                                                            {/* ---------only admin can view this button----(start)---- */}
        <div className="justify-center">      
      
          <Button 
            color="white"
            bgColor="#03C9D7"
          //  bgColor={currentColor}
            text="Edit"
            borderRadius="10px"
            size="md"
            width="300px"
            // placeholder="only admin can edit"
            // margin-right="200px"
          />
        </div>
                                                            {/* ---------only admin can view this button----(end)---- */}




        </div>
        </div>
      <EditorData2 />
    </div>
    </div>
    </div>
  )
}

export default TermsCondition
