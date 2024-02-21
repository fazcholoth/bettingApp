import React, { useState } from 'react'
import Layout from '../Components/Layout';
import heroImg from '../assets/Cr2.jpg'
import MatchList from './matchList';
// import { useNavigate } from 'react-router-dom'
// import MatchList from './Matches/matchList'
import { PiShoppingBagFill } from "react-icons/pi";
import { FaUserInjured } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { TbCricket } from "react-icons/tb";
import { MdCasino } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";



function Home() {

  const [display, setdisplay] = useState(true);
  const redirectPage = () => {

    setMatch(true);
  }

  const cricketoptions = ['odi','t20','test']
  
  const changeStyle=()=>{
    setdisplay(!display)
    console.log('clicked');
  }

  // console.log("this is home page");
  // RS_P_1744661780011028485
  return (
    <Layout>

      <div className=' flex'>
        <div className='h-screen w-96 bg-black'>
          <div className='text-white mt-24 text-center font-bold text-lg border border-solid m-3 rounded-lg  flex justify-center items-center px-1 py-1'>
            <div className='justify-center items-center mr-3 '>
              <PiShoppingBagFill />
            </div>
            <div>
              Bonus
            </div>
          </div>

          <div className='flex '>
            <div className='text-white mt-5 text-center font-bold text-lg border border-solid m-3 rounded-lg w-32 flex items-center justify-center h-10'>
              <div className='justify-center items-center mr-3 '>
                <FaUserInjured />
              </div>
              <div>
                Guest
              </div>
            </div>
            <div className='text-white mt-5 text-center font-bold text-lg border border-solid m-3 rounded-lg w-32 flex items-center justify-center h-10'>
              <div className='justify-center items-center mr-3 '>
                <AiOutlineLogin />
              </div>
              <div>
                Login
              </div>
            </div>
          </div>
          
          {display&&(<div className='text-white mt-5 text-center font-bold text-lg border border-solid m-3 rounded-lg  flex justify-center items-center px-1 py-1' onClick={changeStyle}>
            <div className='justify-center items-center mr-3 '>
              <TbCricket />
            </div>
            <div className='flex gap-2 items-center'>
              Cricket
              <FaArrowCircleRight />
            </div>
          </div>)}
          {!display&&(cricketoptions.map((options,index)=>(
          <Link to={`/matchlist/${options}`} key={index}>
          <div className='text-white mt-5 text-center font-bold text-lg border border-solid m-3 rounded-lg  flex justify-center items-center px-1 py-1'>
            
              <div className='uppercase'>
              {options}
              </div>
          </div>
          </Link>
          )))}
          
          {display&&(<div className='text-white mt-8 text-center font-bold text-lg border border-solid m-3 rounded-lg  flex justify-center items-center px-1 py-1'>
            <div className='justify-center items-center mr-3 '>
              <MdCasino />
            </div>
            <div>
              Casino
            </div>
          </div>)}
        </div>

        <div className=' '>
          <img src={heroImg} className='h-screen object-cover w-screen' />
        </div>

      </div>
      {/* <div className='flex'>
          <section className="bg-amber-300 text-white w-1/4 p-4 h-screen">
            {/* Add sidebar content */}
      {/* <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
            <ul>
              <div>
                <button className="mb-2" onClick={redirectPage} >Cricket</button>
              </div>
              <div> */}
      {/* <button className="mb-2">Casino</button> */}
      {/* </div> */}
      {/* Add more sidebar options */}
      {/* </ul> */}


      {/* </section>
          <section className=''>
            <div > */}
      {/* <img className="h-72 w-[800px] ml-auto" src="cricket2.jpg" alt="" />
               */}
      {
        // match && <MatchList/>
      }

      {/* <div>

              <img className="h-72 w-[800px]  ml-auto" src="cricket2.jpg" alt="" />
            </div> */}

      {/* </section> */}
      {/* </div> */}

      {/* </div> */}
    </Layout>
  )
}

export default Home;