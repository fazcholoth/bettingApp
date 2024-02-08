import React from 'react'

function Rows({data}) {
  return (
    <div className='w-full bg-slate-200 flex justify-around my-3 py-2'><div>{data.name}</div><button className='text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1'>Choose</button></div>
  )
}

export default Rows