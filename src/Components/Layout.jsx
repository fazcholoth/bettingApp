import React from 'react'
import { Link } from 'react-router-dom';



function Layout({ children }) {

  return (

    // header
    <div className="min-h-fit bg-slate-800 w-full font-mono ">
      {/* <div className="w-full bg-slate-700 flex justify-between px-10 text-white items-center h-[15vh]">
        {/* <div className='cursor-pointer font-extrabold text-yellow-400'>Royal Betting</div>
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex w-2/4 justify-between items-center ">
            <div className='mx-4 my-6 md:my-0'>
              <Link to="/home"> Home </Link>
            </div>
            <div className='mx-4 my-6 md:my-0'>
              <Link to="/games"> Games </Link>
            </div>
            <div className='mx-4 my-6 md:my-0'>
              <Link to="/about"> About </Link>
            </div>
            <div className='cursor-pointer mx-4 my-6 md:my-0'> Profile </div>
          </div>

          <div className="flex w-full justify-end  items-center space-x-3">
            <div className="rounded-lg px-3 bg-yellow-500 hover:bg-orange-600 mx-4 my-6 md:my-0">
              <Link to="/register"> Register </Link>
            </div>
            <div className="rounded-lg px-3 bg-yellow-500 hover:bg-orange-600 mx-4 my-6 md:my-0">
              <Link to="/"> Login </Link>
            </div>
          </div>
        </div> */}

      {/* </div> */}
      {/* headerend */}


      <nav className='z-50 '>
        <div className='h-[15vh] flex  justify-between items-center lg:py-5 px-20 py-20 border-b '>
          <div className='flex items-center flex-1'>
            <h2 className=' font-bold text-3xl text-yellow-500'> Royal Betting</h2>
          </div>
          <div>
            <ul className='float-right mr-10 flex  space-x-4 uppercase rounded'>
              <Link to="/" className='hover:text-emerald-400 transition border-b-2 border-white hover:border-pink-400 px-[18px] py-[7px] rounded-lg text-white'> Home </Link>
              <Link to="/games" className='hover:text-emerald-400 transition border-b-2 border-white hover:border-pink-400 px-[18px] py-1 rounded-lg text-white'> Games </Link>
              <Link to="/about" className='hover:text-emerald-400 transition border-b-2 border-white hover:border-pink-400 px-[18px] py-1 rounded-lg text-white'> About </Link>
              <li className='hover:text-emerald-400 transition border-b-2 border-white hover:border-pink-400 px-[18px] py-1 rounded-lg cursor-pointer text-white'> Profile</li>
              <div className='flex justify-end items-center gap-5 space-x-3 '>
                <Link to="/register" className='flex justify-end items-center text-white hover:text-emerald-400 transition border-gray-400 hover:border-pink-400 px-[18px] py-1 rounded-lg '>Register</Link>
                <Link to="/login" className='flex justify-end items-center text-white hover:text-emerald-400 transition border-gray-500 hover:border-pink-400 px-[18px] py-1 rounded-lg'>Login</Link>
                {/* <Link to="/matchlist" >Match Lists</Link> */}
              </div>
            </ul>



          </div>
        </div>
      </nav>


      {children}
      {/* <div className="w-full flex justify-center min-h-[70vh]">Games</div> */}

      <div className="w-full bg-slate-700 flex justify-center px-10 text-white items-center h-[15vh]">
        footer
      </div>

    </div>

  )
}

export default Layout;