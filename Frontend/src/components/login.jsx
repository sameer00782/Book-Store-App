import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {

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
       await axios.post("https://book-store-app-backend-p27r.onrender.com/users/login", userInfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data){
            
                toast.success("Loggedin Successfully");
                document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                  window.location.reload();
                  localStorage.setItem("Users",JSON.stringify(res.data.user));
                },1000)
            }
        }) .catch((err) => {
            if(err.response){
                console.log(err);
                toast.error("Error: " + err.response.data.message);
                setTimeout(()=> {},2000);
            }
        })
      };


      const closeModal = () => {
        const modal = document.getElementById("my_modal_3");
        if (modal) {
          modal.close();  // Close the modal programmatically
        }
      };

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Close button */}
          <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        
          <h3 className="font-bold text-lg">Login</h3>

          {/* Email */}
          <div className='mt-4 space-y-2'>
              <span>E-mail</span>
              <br />
              <input type="email" placeholder='Enter your Email' className='w-full px-3 py-1 rounded-full border outline-none bg-white dark:text-black'
              {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Password */}
          <div className='mt-4 space-y-2'>
              <span>Password</span> 
              <br />
              <input type="text" placeholder='Enter your Password' className='w-full px-3 py-1 rounded-full border outline-none bg-white dark:text-black'
              {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
        
        {/* Login Button */}
        <div className="flex justify-around mt-4">
          <button className='bg-black text-white rounded-full px-4 py-1 hover:bg-slate-700 duration-200 dark:bg-blue-600'>Login</button>
          <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
        </div>
      </form>
      </div>
    </dialog>
    </div>
    </>
  )
}

export default Login;
