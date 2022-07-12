import React from 'react'

function Register() {
  return (
    <div className='flex flex-col justify-center h-100 place-items-center font-serif  '>
        
    <form className='max-w-[400px] w-full mx-auto bg-white p-4  rounded-lg border-2'>
    
      <h1 className='text-xl font-bold text-center py-6'>Sign Up</h1>

    <div className='flex flex-col py-2'> 
                    <label>Full Name</label>
                    <input className='border p-2'  placeholder="Enter Full Name" type="text" required/>
      </div>

      <div className='flex flex-col py-2'> 
                    <label>E-mail</label>
                    <input className='border p-2' placeholder="Enter E-mail" type="text" />
      </div>

      <div className='flex flex-col py-2'> 
                    <label>Contact Number</label>
                    <input className='border p-2' placeholder="Enter Contact Number" type="text" required/>
      </div>

      <div className='flex flex-col py-2'> 
                    <label>Address</label>
                    <input className='border p-2' placeholder="Enter Address" type="text" required/>
      </div>

      <div className='flex flex-col py-2'> 
                    <label>Username</label>
                    <input className='border p-2' placeholder="Enter Username" type="text" required/>
      </div>

      <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' placeholder="Enter Password" type="password" required/>
      </div>

      <div className='flex flex-col py-2'> 
                    <label>Confirm Password</label>
                    <input className='border p-2' placeholder="Enter Password again" type="text" required />
      </div>
                    <button className='border w-full my-5 py-2 bg-black hover:bg-yellow-500 hover:text-black text-white'>Sign Up</button>
      <div className='text-center'>
                    <p>Already have an account?</p>
                    <a className='text-indigo-700 right-0' href="./login/Login.jsx" >Sign In</a>
      </div>
      
    </form>
    </div>
  )
}

export default Register