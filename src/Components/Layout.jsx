import React from 'react'
import { Link } from 'react-router-dom';


function Layout({ children }) {
  
  return (

    // header
    <div className="min-h-fit bg-slate-400 w-full">
      <div className="w-full bg-slate-700 flex justify-between px-10 text-white items-center h-[15vh]">
        <div className='cursor-pointer font-extrabold text-yellow-400'>Royal Betting</div>
        <div className="flex justify-between w-4/6 items-center">
          {/* <div className="flex w-2/4 justify-between items-center">
            <div>
              <Link to="/home"> Home </Link>
            </div>
            <div>
              <Link to="/games"> Games </Link>
            </div>
            <div>
              <Link to="/about"> About </Link>
            </div>
            <div className='cursor-pointer'> Profile </div>
          </div> */}

          <div className="flex w-full justify-end  items-center space-x-3">
            <div className="rounded-lg px-3 bg-yellow-500 hover:bg-orange-600">
              <Link to="/register"> Register </Link>
            </div>
            <div className="rounded-lg px-3 bg-yellow-500 hover:bg-orange-600">
              <Link to="/"> Login </Link>
            </div>
          </div>
        </div>

      </div>
      {/* headerend */}


      {children}
      {/* <div className="w-full flex justify-center min-h-[70vh]">Games</div> */}

      <div className="w-full bg-slate-700 flex justify-center px-10 text-white items-center h-[15vh]">
        footer
      </div>

    </div>

  )
}

export default Layout;