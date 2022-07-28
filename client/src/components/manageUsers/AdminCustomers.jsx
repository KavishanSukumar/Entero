import React from 'react'

function AdminCustomers() {
  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2">
        <div className="flex flex-col lg:flex-row justify-around items-center py-2 bg-white shadow-2xl">
            <div className="mb-2 lg:mb-0">
                <button className="inline-flex items-center justify-center w-36 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm py-2 mr-2" type="button">
                    Customer
                </button>
                <button className="inline-flex items-center justify-center w-36 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm py-2" type="button">
                    Services Provider
                </button>
            
            </div>
            <div className="relative">
                <input type="text" className="p-2 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for users" />
            </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500">
        
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th className="py-3 px-6">
                    Product name
                </th>
                <th className="py-3 px-6">
                    
                </th>
                <th className="py-3 px-6">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th className="py-4 px-6 font-medium text-gray-900 ">
                    Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td className="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>
    </table>
    </div>
  )
}

export default AdminCustomers