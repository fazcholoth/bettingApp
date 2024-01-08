import React from 'react'
import Layout from '../Components/Layout'

function contact() {
  return (
    <Layout>
       <div className="w-full min-h-[70vh]">
        <div className="bg-black w-full h-[40vh] flex justify-center items-center text-white">
           Contact Us
        </div>
        <div className="w-full bg-zinc-700 text-white px-14 py-10">
            <div className='mb-5'>Contact</div>
            <div className="flex gap-5 w-full mb-4"><div className="w-[45%] flex items-center gap-3"><label className='w-[12vw]' htmlFor="">Name</label><input className="w-full rounded-lg h-10" type="text" /></div><div className="w-[45%] flex items-center gap-3"><label className='w-[12vw]' htmlFor="">Email</label><input className="w-full rounded-xl h-10" type="text" /></div></div>
            <div className="flex gap-5 w-full mb-4"><div className="w-[45%] flex items-center gap-3"><label className='w-[12vw]' htmlFor="">Description</label><input className="w-full rounded-lg h-10" type="text" /></div></div>
        
        </div>
        
      </div> 
    </Layout>
  )
}

export default contact