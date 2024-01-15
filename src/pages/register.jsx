
import React from 'react'
import Layout from '../Components/Layout';
import { useState } from 'react';

function Register() {

  const [data, setData] = useState({
    username: '',  
    email: '',
    password: '',
    
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    // Clear the validation error when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    // Perform form validation
    const validationErrors = {};

    if (!data.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!data.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
        validationErrors.password = "Password should be atleast 6 charecters"
    }


    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no validation errors, proceed with form submission
    console.log('Form submitted:', data);
  };

  return (
    <Layout>
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white h-auto w-[350px] flex-col justify-center  items-center rounded-xl  shadow-2xl border border-teal-700">
          <form className="" onSubmit={handleSubmit} >
            <div className=" mt-12 bg-orange-400 h-10 rounded-sm mb-5 ">
              <p className="login font-semibold text-2xl text-center mr-4 text-blue-700 cursor-pointer "> Register </p>
            </div>

            <div className="mr-10 mb-5 pl-10">
              <label className="text-zinc-500 font-semibold">Name</label> <br />
              <input className="outline-none h-10 w-full px-5 border border-gray-200 outline-blue-400 rounded-md" 
              type="email" placeholder="Name"  id="name" name="name" value={data.username} 
              onChange={handleInputChange}/>
               {errors.username && <span className="text-red-600">{errors.username}</span>}
            </div>
            <div className="mr-10 mb-5 pl-10">
              <label className="text-zinc-500 font-semibold">E-mail</label> <br />
              <input className="outline-none h-10 w-full px-5 border border-gray-200 outline-blue-400 rounded-md" 
              type="email" placeholder="E-mail"  id="email" name="email" value={data.email}
              onChange={handleInputChange}/>
               {errors.email && <span className="text-red-600">{errors.email}</span>}
            </div>
            <div className="mr-10 pl-10">
              <label className="text-zinc-500 font-semibold">Password</label> <br />
              <input className="outline-none h-10 w-full px-5 border border-gray-200 outline-blue-400 rounded-md" 
              type="password" placeholder="Password"  id="password" name="password" value={data.password}
              onChange={handleInputChange}/>
              {errors.password && <span className="text-red-600">{errors.password}</span>}
            </div>
            <div className=" flex justify-center items-center mr-11 font-medium text-lg text-zinc-100">
              <button type="submit" className="pl-4 mt-4 bg-red-500 px-6 py-2 ml-5 rounded-full hover:bg-blue-500 hover:shadow-lg">Register</button>
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