
import React from 'react'
import { userSchema } from './validation';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';



export const SignUp = () => {
    const navigate = useNavigate();
   const createUser=(data)=>{
console.log(data)
navigate("/dashboard")
   }
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(userSchema),
    });
    return (
        <div>
            <div className='flex flex-col items-center pt-24 '>
                <h1>LOGO HERE</h1>
                <form onSubmit={handleSubmit(createUser)} className='bg-white h-96 w-96 flex flex-col items-center '>
                    <input type="text" placeholder='Name' {...register("fullName")}  className='mt-16 pl-4' ></input>
                    <p className='text-red-600'>{errors.fullName?.message}</p>
                    <input type="text" placeholder='Email' {...register("email")} className='mt-4 pl-4 pb-2 pt-2' ></input>
                    <p className='text-red-600'>{errors.email?.message}</p>
                    <input type="password" placeholder='Password' {...register("password")} className='mt-4 pl-4 pb-2 pt-2'  ></input>
                    <p className='text-red-600'>{errors.password?.message}</p>
                    <input type="password" placeholder='Password' {...register("confirmpassword")} className='mt-4 pl-4 pb-2 pt-2'  ></input>
                    <p className='text-red-600'>{errors.confirmpassword && "Password should match"}</p>
                    
                     <button className='text-white px-4 py-2 mt-8 bg-green-600'>Sign Up</button>

                </form>

            </div>
        </div>
    )
}
