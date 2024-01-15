import React from 'react'
import Layout from '../Components/Layout'



function Home() {

  console.log("this is home page");
  return (
    <Layout>
      <div className="w-full min-h-[70vh]">
        <div className="bg-black w-full h-[40vh] flex justify-center items-center text-white">
           Play Now
        </div>
        <div className="px-10">
        <div>
            <div>Cricket</div>
            <img className="h-72 w-full" src="cricket2.jpg" alt="" />
        </div>
        <div>
            <div>Casino</div>
            <img className="h-72 w-full" src="cricket2.jpg" alt="" />
        </div>
        </div>
        
      </div>  
    </Layout>
  )
}

export default Home;