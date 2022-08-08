import React, { Component } from 'react';
import Fab from './fab.jpg';



class Portfolio extends Component { 
    render() { 
        return (
      
       <div className='bg-white-300 w-screen h-screen mt-20 flex flex-wrap gap-8'>
              <div className='order-1 w-60 ml-96 mt-20'>

   
               <nav className="flex sm:justify-center space-y-4 flex-col ">
                  {[
                        ['Portfolio', '/portfolio'],
                        ['Services', '/service'],
                        ['Packages', '/packages'],
                        ['Chat', '/chat'],
                     ].map(([title, url]) => (
                        <a href={url} className="rounded-lg px-3 py-2 text-black  hover:bg-cyan-500 hover:text-white font-bold">{title}</a>
                     ))}
                </nav>
             

             </div>
             <div className='order-2 ml-96 mt-20'>
                
               <img src={Fab} alt="" className='w-64 h-64 rounded-lg'/>
               <button className='rounded-lg font-bold  text-2xl mt-10 text-white bg-cyan-500 w-64  hover:bg-slate-900 hover:text-slate-100'>Edit Portfolio</button>

             </div>
       </div>
        
        






        );
    }
}
 
 
