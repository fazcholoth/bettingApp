
import React, { useState } from "react";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaUserAlt } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { loginValidation } from "./loginValidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import loginImg from '../assets/Cr2.jpg'
// import logoImg from '../assets/Images/login2.jpg'

const initialValues = {
  email: "",
  password: "",
}


const Login = () => {

  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const Notify = () => {
    toast('Login succesfull');

  }

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post('http://localhost:5000/api/users/auth', values);
        console.log(response.data);
        if (response.status === 200) {
          navigate('/home')
        } else {
          setErrMsg(response.data.message)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  });



  return (
    <Layout>

      <div>
        {errMsg}
      </div>

      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
        <div className="hidden sm:block">
          <img className='  w-full h-full object-cover' src={loginImg} alt='' />
        </div>
        
        <div className="bg-black flex flex-col justify-center   shadow-2xl border border-none">
          <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto p-8 px-8 bg-black rounded-xl">
            <div className="text-white mt-12 h-12 rounded-sm mb-5 flex justify-center items-center">
              <p className="login font-semibold text-4xl text-center mr-4 dark:text-white cursor-pointer flex justify-center items-center"> <FaUserAlt className="mr-2" /> Login  </p>
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label className="text-zinc-500 font-semibold">E-mail</label> <br />
              <input className="rounded-lg mt-1 p-2 focus:bg-gray-800 focus:outline-none"
                type="email" placeholder="E-mail" id="email" name="email" value={values.email}
                onBlur={handleBlur} onChange={handleChange} autoComplete="off" />

              {errors.email && <small className='text-red-500 font-bold'>{errors.email}</small>}
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label className="text-zinc-500 font-semibold">Password</label> <br />
              <input className="rounded-lg bg-white mt-1 p-2 focus:bg-gray-800 focus:outline-none focus:border-purple-600"
                type="password" placeholder="Password" id="password" name="password" value={values.password}
                onBlur={handleBlur} onChange={handleChange} />

              {errors.password && <small className='text-red-500 font-bold'>{errors.password}</small>}
            </div>
            <div className="cursor-pointer text-red-400">
              <a>Forgot Password?</a>
            </div>

            <div className=" flex justify-center items-center mr-11 font-medium text-lg text-zinc-100">
              <button type="submit" className="pl-4 mt-4 bg-teal-500 shadow-teal-500/80 focus:border-white px-6 py-2 ml-5 rounded-full hover:bg-blue-500  flex justify-center items-center" onClick={Notify} >Login <BiLogInCircle /></button>
            </div>
            <div className="flex justify-center text-sm mt-4 text-rose-400 underline mb-3">
              <small className="mr-3"> Dont have an account?</small> <br />
              <Link to="/register" className="login hover:text-white">Register here</Link>
            </div>
            <ToastContainer />
          </form>
        </div>

      </div>
    </Layout>
  )
}

export default Login;

