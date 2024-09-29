import React from 'react';
import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom';
import Login from './login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Signup() {

   const location=useLocation()
   const navigate=useNavigate()
   const from=location.state?.from?.pathname || "/"

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
       await axios.post("https://book-store-app-backend-342t.onrender.com/users/signup", userInfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data){
              
                toast.success("Signup Successfull");
                navigate(from , {replace:true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        }) .catch((err) => {
            if(err.response){
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        })
      };

      const openLoginModal = () => {
        document.getElementById("my_modal_3").showModal();
      };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                            <h3 className="font-bold text-lg">Signup</h3>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input
                                    type="text"
                                    placeholder='Enter your Fullname'
                                    className='w-full px-3 py-1 rounded-full border outline-none bg-white dark:text-black'
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>E-mail</span><br />
                                <input
                                    type="email"
                                    placeholder='Enter your Email'
                                    className='w-full px-3 py-1 rounded-full border outline-none bg-white dark:text-black'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span><br />
                                <input
                                    type="text"
                                    placeholder='Enter your Password'
                                    className='w-full px-3 py-1 rounded-full border outline-none bg-white dark:text-black'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Signup Button */}
                            <div className="flex justify-around mt-4">
                                <button className='bg-black text-white rounded-full px-4 py-1 hover:bg-slate-700 duration-200 dark:bg-blue-600'>Signup</button>
                                <p>Have an Account? <button
                                    className='underline text-blue-500 cursor-pointer'
                                    onClick={openLoginModal}
                                >Login</button></p>
                            </div>
                        </form>
                        
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
}



export default Signup;
