
import React from 'react'
import Layout from '../Components/Layout';
import { useFormik } from 'formik';
import { signUpValidation } from './signUpValidation';
import { FaUserAlt } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';



const initialValues = {
  name: "",
  dob: "",
  mobile: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = () => {

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpValidation,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/users', values);
        console.log(response.data);
      } catch (error) {
        // console.error('Error fetching data:', error);
        console.log(error?.response?.data);
        // throw error;
      }
    }
  });






  return (
    <Layout>
      {/* <div className="bg-gray-200 h-screen flex justify-center items-center">
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
              <label className="text-zinc-500 font-semibold">Confirm Password</label> <br />
              <input className="outline-none h-8 w-full px-5 border border-gray-200 outline-blue-400 rounded-md"
                type="password" placeholder="Confirm Password" id="cpassword" name="cpassword" value={values.cpassword}
                onBlur={handleBlur} onChange={handleChange} />
              {errors.cpassword && <small className='text-red-500 font-bold'>{errors.cpassword}</small>}
            </div>
            <div className=" flex justify-center items-center mr-11 font-medium text-lg text-zinc-100">
              <button type="submit" className="pl-4 mt-4 bg-red-500 px-6 py-2 ml-5 rounded-full hover:bg-blue-500 hover:shadow-lg flex justify-center items-center">Register <MdLabelImportant /></button>
            </div>
            <div className="flex justify-center text-sm mt-4 text-red-500 underline mb-3">
              <small className='mr-3 text-20'>Already have an account?</small>
              <a href="#" className="login hover:text-red-900">Login here</a>
            </div>

          </form>
        </div>
      </div> */}
      {/* grid grid-cols-1 sm:grid-cols-2 */}

      {/* <div>
        <h3> Create account</h3>
      </div> */}
      <div className=''>

        <div className='bg-fuchsia-200 h-screen flex justify-center items-center '>

          <div className='  flex justify-center items-center '>

            <div className='bg-zinc-950 h-[600px] w-[900px] rounded-xl flex'>

              <div className='text-white m-20 text-lg font-bold'>
                <div className='mb-10'>
                  Hi there! <br />
                </div>
                <div className='mt-3 text-sm mb-5'>
                  Webcascade right to <br /> innovation
                </div>

                <div className='mt-32 border border-solid w-fit rounded-2xl px-2 py-1 hover:bg-lime-600'>
                  <Link to="/login" className="">
                    <button>
                      Sign in
                    </button>
                  </Link>
                </div>
                
              </div>
              <form onSubmit={handleSubmit}>
                <div className='text-white mt-10 mb-4'>
                  <labe>Personal information:</labe> <br />
                  <input type='text' placeholder='Firstname' id="name" name="name" className='p-2 focus:bg-gray-600  text-black focus:outline-none rounded-lg w-full'
                    value={values.name}
                    onBlur={handleBlur} onChange={handleChange} /> <br />
                  {errors.name && <small className='text-red-500 font-bold'>{errors.name}</small>}
                </div>
                <div className='text-white  mb-4 '>
                  <labe>Date of birth:</labe> <br />
                  <input type='date' placeholder='DOB' id="dob" name='dob' className='p-2 focus:bg-gray-600 text-black focus:outline-none rounded-lg w-full'
                    value={values.dob}
                    onBlur={handleBlur} onChange={handleChange} /> <br />
                  {errors.dob && <small className='text-red-500 font-bold'>{errors.dob}</small>}
                </div>

                <div className='flex mb-4'>
                  <div className='text-white '>
                    <labe>Contact Details:</labe> <br />
                    <input type='text' placeholder='Phone no' id="mobile" name='mobile' className='p-2 focus:bg-gray-600 text-black focus:outline-none rounded-lg'
                      value={values.mobile}
                      onBlur={handleBlur} onChange={handleChange} /> <br />
                    {errors.mobile && <small className='text-red-500 font-bold'>{errors.mobile}</small>}

                  </div>
                  <div className='text-white ml-8'>
                    <labe>E-mail:</labe> <br />
                    <input type='text' placeholder='john@gmail.com' id="email" name='email' className='p-2 focus:bg-gray-600  text-black focus:outline-none rounded-lg'
                      value={values.email}
                      onBlur={handleBlur} onChange={handleChange} /> <br />
                    {errors.email && <small className='text-red-500 font-bold'>{errors.email}</small>}

                  </div>
                </div>
                <div className='flex '>
                  <div className='text-white '>
                    <labe>Account Information:</labe> <br />
                    <input type='text' placeholder='Username' id="name" name='name' className='p-2 focus:bg-gray-600  text-black focus:outline-none rounded-lg'
                      value={values.name}
                      onBlur={handleBlur} onChange={handleChange} /> <br />
                    {errors.name && <small className='text-red-500 font-bold'>{errors.name}</small>}

                  </div>
                  <div className='text-white ml-8 mt-6'>
                    <input type='password' placeholder='Password' id="password" name='password' className='p-2 focus:bg-gray-600 text-black focus:outline-none rounded-lg'
                      value={values.password}
                      onBlur={handleBlur} onChange={handleChange} /> <br />
                    {errors.password && <small className='text-red-500 font-bold'>{errors.password}</small>}
                  </div>



                </div>
                <div className='text-white  mt-6'>
                  <input type='password' placeholder='Confirm password' id="cpassword" name="cpassword" className='p-2 focus:bg-gray-600 text-black focus:outline-none rounded-lg w-full'
                    value={values.cpassword}
                    onBlur={handleBlur} onChange={handleChange} /> <br />
                  {errors.cpassword && <small className='text-red-500 font-bold'>{errors.cpassword}</small>}

                </div>

                <div className='flex justify-center items-center'>
                  <button className='text-white mt-6 mb-3 text-center border border-solid w-fit rounded-2xl px-2 py-1 hover:bg-lime-600  '>Register</button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* <div className='bg-white h-screen flex justify-center '>
          <div className='mt-10 text-yellow-800'>create an account</div>

        </div> */}



      </div>
    </Layout>
  )

}

export default Register;