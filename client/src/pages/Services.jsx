// import React from 'react';
// import { GridComponent, ColumnsDirective,
// ColumnDirective, Page, Selection, Inject, Edit,
// Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customersData, customersGrid } from '../data/dummy';
// import { Header } from '../components';

// const Services = () => {
//   return (
//     <div className="w-full p-2 pb-48
//           bg-slate-100">
//           <div className="m-2 md:m-10 p-2 md:p-10 
//         bg-white rounded-3xl">





//           {/* --------------------- */}
//       {/* <Header category="Page" title="Services" />
//       <GridComponent
        
//         dataSource={customersData}
//         allowPaging
//         allowSorting
//         toolbar={['Delete']}
//         editSettings={{ allowDeleting: true,
//         allowEditing: true }}
//         width="auto"
//       >
//         <ColumnsDirective>
//           {customersGrid.map((item, index) => (
//             <ColumnDirective key={index} {...item} />
//           ))}
//         </ColumnsDirective>
//         <Inject services={[Page, Toolbar,
//         Selection, Edit, Sort, Filter ]} />
//       </GridComponent> */}
//           {/* ---------------------- */}
//     </div>
//     </div>
//   )
// }

// export default Services




import React from 'react';
import { GridComponent, ColumnsDirective,
ColumnDirective, Page, Selection, Inject, Edit,
Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid, earningData2} from '../data/dummy';
import { Header } from '../components';
import { Button } from '../components';



const Services = () => {
  return (
    <div className="w-full p-2 pb-48
          bg-slate-100">
          <div className="m-2 md:m-10 p-2 md:p-10 
        bg-white rounded-3xl">
       <Header title="Services" />

<div className="flex flex-wrap lg:flex-nowrap justify-center">
          {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dary-bg h-44
          rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
            <div className="flex justify-between item-center">
              <div>
                <p className="font-bold text-gray-400">
                  Earnings
                </p>
                <p className="text-2xl">
                  $3,448.78
                </p>
              </div>
  
            </div>
            <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div> */}
  
          <div className="flex m-5 flex-wrap justify-center
          gap-1 item-center">
            {earningData2.map((item) => (
              <div
                key={item.title}
                className="bg-white
                dark:text-gray-200
                dark:bg-secondary-dark-bg md:w-56
                p-4 pt-9 rounded-2xl hover:drop-shadow-xl shadow-lg"
                >
                  <button type="button"
                  style={{ color: item.iconColor,
                  backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9
                  rounded-full p-4
                  hover:drop-shadow-xl">
                    {item.icon}
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">
                    {item.amount}
                    </span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.title}
                  </p>
                  <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Search"
                borderRadius="10px"
                size="md"
              />
            </div>
                </div>
            ))}
  
          </div>
  


   {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dary-bg h-44
          rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
            <div className="flex justify-between item-center">
              <div>
                <p className="font-bold text-gray-400">
                  Earnings
                </p>
                <p className="text-2xl">
                  $3,448.78
                </p>
              </div>
  
            </div>
            <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div> */}
  <div>

  {/* <Header category="Page" title="Services" /> */}
  <Header title="Caterings" />
      <GridComponent
        
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true,
        allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar,
        Selection, Edit, Sort, Filter ]} />
      </GridComponent>
  </div>

   


        </div>


          {/* --------------------- */}
      {/* <Header category="Page" title="Services" />
      <GridComponent
        
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true,
        allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar,
        Selection, Edit, Sort, Filter ]} />
      </GridComponent> */}
          {/* ---------------------- */}
    </div>
    </div>
  )
}

export default Services