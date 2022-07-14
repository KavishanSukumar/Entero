import React from 'react'

function Login() {
  return (
    <div style={{ backgroundImage: "url(/assets/images/login4.jpg)" }} className='bg-opacity-60 flex flex-col justify-center h-screen font-serif bg-cover'>
      
    
    <form className='max-w-[400px] w-full mx-auto bg-white bg-opacity-30	 p-4 rounded-lg border-2 shadow-inner '>
      <h1 className='text-2xl font-bold text-center py-6'>Sign In</h1>
      <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' placeholder="Enter Username" type="text" />
      </div>

      <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' placeholder="Enter Password" type="password" />
      </div>

                    <button className='border w-full my-5 py-2 bg-black hover:bg-gray-500 hover:text-black text-white'>Sign In</button>
      <div className='text-center'>
                    <p>Do you have an account?</p>
                    <a className='text-indigo-900 right-0 font-bold' href="#" >Sign Up</a>
      </div>
      
    </form>
    
    </div>
  )
}

export default Login