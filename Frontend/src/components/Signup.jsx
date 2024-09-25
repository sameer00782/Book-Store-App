import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login';
import { useForm } from "react-hook-form"


function signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {

      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }

      axios.post("http://localhost:4001/user/signup")

      };

  return (
   <>
   <div className=' flex h-screen items-center justify-center'>
   <div  className="w-[600px]">
  <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
      <Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>

     {/* {Name} */}

     <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter your Fullname' className='w-80 px-3 py-1 rounded-full border outline-none bg-white'
        {...register("fullname", { required: true })}
        />
         <br />
         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
     </div> 

     {/* {Email} */}
    <div className='mt-4 space-y-2'>
        <span>E-mail</span>
        <br />
        <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 rounded-full border outline-none bg-white'
        {...register("email", { required: true })}
        />
         <br />
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/*Password*/}

    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text" placeholder='Enter your Password' className='w-80 px-3 py-1 rounded-full border outline-none bg-white'
        {...register("password", { required: true })}
        />
         <br />
         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
  
  {/* {Button} */}

  <div className="flex justify-around mt-4">
    <button className='bg-black text-white rounded-full px-4 py-1 hover:bg-slate-700 duration-200 dark:bg-blue-600'>Signup</button>
    <p>Have Account?{""} <button className=' underline text-blue-500 cursor-pointer'
    onClick={()=>  document.getElementById("my_modal_3").showModal()}
    >Login</button>
    <Login/></p> 

  </div>
  
  </form>
  </div>
</div>
   </div>
   </>
  )
}

export default signup
