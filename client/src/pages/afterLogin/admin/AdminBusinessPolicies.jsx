import React from 'react';
import { Alignments, HtmlEditor, Image, Inject, Link, QuickToolbar,
RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import {EditorData} from '../../../documents/dummy';
import Header from '../../../components/PagesHeader/Header';
import Button from '../../../components/button/Button';

const AdminBusinessPolicies = () => {
    return (
        <div className="w-full p-2 pb-48
        bg-slate-100">
        {/* ---only admin can this div-(start)--- */}
        <div className="m-2 md:m-10 mt-24 p-2
          md:p-10 bg-white rounded-3xl">

            <div
            className="flex m-5 flex-wrap 
            gap-1"
            >
            <div >
            <Header title="Edit Business Policies" />
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
         
           
          
          <RichTextEditorComponent>
          <EditorData />
            <Inject services={[HtmlEditor, Toolbar,
            Image, Link, QuickToolbar ]} />
          </RichTextEditorComponent>

         
        </div>

        {/* ---only admin can this div-(end)--- */}

        </div>
      )
}

export default AdminBusinessPolicies