import React from 'react'

function Layout({children}) {
  return (

    // header
    <div className="min-h-screen bg-slate-400 w-full">
        <div className="w-full bg-slate-700 flex justify-between px-10 text-white items-center h-[15vh]"><div>Royal Betting</div><div className="flex justify-between w-4/6 items-center"><div className="flex w-2/4 justify-between items-center"><div>home</div><div>games</div><div>about</div><div>profile</div></div><div className="flex w-1/5 justify-between items-center"><div className="rounded-lg px-3 bg-yellow-500">Register</div><div className="rounded-lg px-3 bg-yellow-500">Login</div></div></div>
            
        </div>
    {/* headerend */}
     
     
     {children}
     
    

        <div className="w-full bg-slate-700 flex justify-center px-10 text-white items-center h-[15vh]">
            footer
        </div>

    </div>

  )
}

export default Layout