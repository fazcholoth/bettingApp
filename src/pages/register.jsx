
import React from 'react'
import Layout from '../Components/Layout';
import { useFormik } from 'formik';
import { signUpValidation } from './signUpValidation';
import { FaUserAlt } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import axios from 'axios';



const initialValues = {
  name: "",
  mobile: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = () => {

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpValidation,
    onSubmit: async(values) => {
        try {
          const response = await axios.post('http://localhost:5000/api/users', values);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
    }
  });


  



  return (
    <Layout>
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white h-auto w-[400px] flex-col justify-center  items-center rounded-xl  shadow-2xl border border-teal-700">
          <form className="" onSubmit={handleSubmit} >
            <div className=" mt-12 bg-orange-400 h-12 rounded-sm mb-5 flex justify-center items-center ">
              <p className="login font-semibold text-2xl text-center mr-4 text-blue-700 cursor-pointer flex justify-center items-center "> <FaUserAlt className="mr-2" /> Register </p>
            </div>

            <div className="mr-10 mb-4 pl-10">
              <label className="text-zinc-500 font-semibold">Name</label> <br />
              <input className="outline-none h-8 w-full px-5 border border-gray-200 outline-blue-400 rounded-md"
                type="text" placeholder="Name" id="name" name="name" value={values.name}
                onBlur={handleBlur} onChange={handleChange} />
              {errors.name && <small className='text-red-500 font-bold'>{errors.name}</small>}
            </div>
            <div className="mr-10 mb-4 pl-10">
              <label className="text-zinc-500 font-semibold">Mobile no</label> <br />
              <input className="outline-none h-8 w-full px-5 border border-gray-200 outline-blue-400 rounded-md"
                type="number" placeholder="Mobile" id="mobile" name="mobile" value={values.mobile}
                onBlur={handleBlur} onChange={handleChange} />
              {errors.mobile && <small className='text-red-500 font-bold'>{errors.mobile}</small>}
            </div>
            <div className="mr-10 mb-4 pl-10">
              <label className="text-zinc-500 font-semibold">E-mail</label> <br />
              <input className="outline-none h-8 w-full px-5 border border-gray-200 outline-blue-400 rounded-md"
                type="email" placeholder="E-mail" id="email" name="email" value={values.email}
                onBlur={handleBlur} onChange={handleChange} />
              {errors.email && <small className='text-red-500 font-bold'>{errors.email}</small>}
            </div>
            <div className="mr-10 pl-10 mb-4">
              <label className="text-zinc-500 font-semibold">Password</label> <br />
              <input className="outline-none h-8 w-full px-5 border border-gray-200 outline-blue-400 rounded-md"
                type="password" placeholder="Password" id="password" name="password" value={values.password}
                onBlur={handleBlur} onChange={handleChange} />
              {errors.password && <small className='text-red-500 font-bold'>{errors.password}</small>}
            </div>
            <div className="mr-10 pl-10">
              <label className="text-zinc-500 font-semibold">Confirm_Password</label> <br />
              <input className="outline-none h-8 w-full px-5 border border-gray-200 outline-blue-400 rounded-md"
                type="password" placeholder="Confirm_Password" id="cpassword" name="cpassword" value={values.cpassword}
                onBlur={handleBlur} onChange={handleChange} />
              {errors.cpassword && <small className='text-red-500 font-bold'>{errors.cpassword}</small>}
            </div>
            <div className=" flex justify-center items-center mr-11 font-medium text-lg text-zinc-100">
              <button type="submit" className="pl-4 mt-4 bg-red-500 px-6 py-2 ml-5 rounded-full hover:bg-blue-500 hover:shadow-lg flex justify-center items-center">Register <MdLabelImportant /></button>
            </div>
            <div className="flex justify-center text-sm mt-4 text-red-500 underline mb-3">
              <a href="#" className="login hover:text-red-900">Already have an account?</a>
            </div>

          </form>
        </div>
      </div>
    </Layout>
  )

}

export default Register;