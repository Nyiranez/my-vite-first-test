import React from 'react';
// import * as yup from 'yup'
import { userSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

export const Login = () => {


    //   const[name, setName]= useState("");
    //   const[email, setEmail]= useState("");
    //   const[password, setPassword]= useState("");

    // const hundleName=(e)=>{
    //     setName(e.targe.value)
    // }
    // const hundleEmail=(e)=>{
    //     setEmail(e.targe.value)
    // }
    // const hundlePassword=(e)=>{
    //     setPassword(e.targe.value)
    // }
    // const createuser= async (e)=>{
    //     e.preventDefault();
    //     let user={name, email,password};

    //     const isVald= await userSchema.isValid(user)
    //     console.log(isVald)
    // }

    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(userSchema),
    // });
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

    const createUser = (data) => {
        console.log(data)

        navigate("/dashboard")
    }

    return (
        <div className='flex flex-col items-center'>
            <h1>LOGO HERE</h1>
            <form onSubmit={handleSubmit(createUser)} className='bg-blue-400 h-96 w-96 flex flex-col items-center mt-8'>
                <input type="text" placeholder='Name' name="fullName"
                    {...register("fullName")} className='mt-24 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.fullName?.message}</p>

                <input type="text" placeholder='Email' name="email"
                    {...register("email")} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.email?.message}</p>

                <input type="password" placeholder='Password' name="password"
                    {...register("password")} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.password?.message}</p>

                <button className='mt-16 bg-green-700 text-white px-4 py-2' type="submit">Log In</button>

            </form>
            <p className='mt-8'>Forgot Password?</p>
            <p>Do not Have An Account? <button className='text-red-600'><Link to="/signup">Sign Up</Link></button></p>
        </div>
    );
}