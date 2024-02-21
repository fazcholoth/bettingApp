import Layout from "../Components/Layout";
import React, { useEffect, useState ,useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Components/Config/config";
import { TiTick } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import InnerBackground from '../assets/sectionbackground.jpg'
import { BiX } from "react-icons/bi";


function bidding() {
  // const [overs,setOvers]=useState()
  // const { key, team, from, to } = useParams();
  const { format ,key} = useParams();
  const elementRef = useRef(null);
  // const start_over = parseInt(from);

  const [teama,setteama]=useState()
  const [teamb,setteamb]=useState()
  const [overs,setovers]=useState([])
  const [showbid,setshowbid]=useState(false)
  const [bidprice,setbidprice]=useState(50)
  const [bidball,setbidball]=useState()
  const [bidover,setbidover]=useState()
  const [bidteam,setbidteam]=useState()
  const [bidoption,setbidoption]=useState()

  // const t2o = new Array(15);
  const t20 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
  const odi = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
  const test = new Array(200);

  // const overs = [start_over,start_over + 1,start_over + 2,start_over + 3,start_over + 4,];

  const balls = [1, 2, 3, 4, 5, 6];

  const options = ["isWicket", "isFour", "isSix", "isDotball", "isExtra"];

  const [finishedovers1, setfinishedovers1] = useState(null);
  const [finishedovers2, setfinishedovers2] = useState(null);
  const [error, setError] = useState(null);
  const teamA = 'a'
  const teamB = 'b'

  const handlebidd = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}matches/bidding/${key}/${bidteam}`,
        { bidover, bidball, bidoption,bidprice}
      );
      // setupdated(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setError(error.message);
    }
    setshowbid(!showbid)
  };

  useEffect(() => {

    if (format=="t20") {
      setovers(t20)
    }else{
      setovers(odi)
    }

    

    // console.log(t2o);

    const fetchovers = async (over, ball, option) => {
      try {
        const response = await axios.get(
          `${BASE_URL}matches/allovers/${key}`
        );
        // console.log(response.data);
        setfinishedovers1(response?.data.scorea);
        setfinishedovers2(response?.data.scoreb);
        // console.log(response.data.scorea);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };
    fetchovers();

    

  }, []);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [finishedovers1,finishedovers2])
  

  return (
    <Layout>
      {showbid&&<div className="fixed right-2 md:right-10 top-1/3 bg-green-500 h-1/2 w-4/5 md:w-1/4 rounded-md px-2 py-4 md:font-bold md:text-xl text-white">
        <div className="text-4xl" onClick={()=>{setshowbid(!showbid)}}><BiX/></div>
        <div className="flex flex-col gap-4 h-full justify-center">
        <div className="flex gap-2"><div>Bid Level :</div><div>Team:{bidteam},Over:{bidover},Ball:{bidball}</div></div>
        <div className="flex gap-2"><div>Bid Option :</div><div>{bidoption}</div></div>
        <div className="flex gap-2"><div>Bid Price :</div><input  className="'p-2 focus:bg-gray-300 text-black focus:outline-none rounded-lg w-1/3" type="number" value={bidprice} onChange={(e)=>{setbidprice(e.target.value)}}/></div>
        <div className="flex justify-center w-full"><button className="bg-blue-500 text-white py-1 px-3 rounded" onClick={handlebidd}>Place Bid</button></div>
        </div>
      </div>}
      <div className="px-5" style={{backgroundImage: `url(${InnerBackground})`}}>
        {overs?.map((over, overIndex) =>
          overIndex < finishedovers1?.length ? (
            <div key={overIndex}>
              <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over:{over}</div>
              {finishedovers1[overIndex]?.map((ball, ballIndex) => (
                <div key={ballIndex} className="bg-gradient-to-br from-blue-500 to-blue-400 flex gap-6 my-5 items-center px-3 py-2 text-white rounded-lg justify-center">
                  <div className="bg-green-500 w-[80px] h-[35px] rounded-lg flex justify-center items-center">
                    {ballIndex + 1}
                  </div>
                  <div className="flex flex-wrap w-4/6">
                  <div className="h-fit flex items-center min-w-[120px]"> Runs:{ball?.Runs ? (ball?.Runs) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Four:{ball?.isFour ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Six:{ball?.isSix ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Extras:{ball?.Extras ? (ball.Extras) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Dotball:{ball?.isDotball ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Wicket:{ball?.isWiket ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  </div>
                  
                </div>
              ))}
            </div>
          ) : overIndex === finishedovers1?.length &&finishedovers2?.length<1 ? (
            <div key={overIndex} ref={elementRef} className="text-red-200">
              {over} Currently Running Over
            </div>
          ) : (
            <div key={overIndex}>
              <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over : {over}</div>
              {finishedovers2?.length<1&&balls.map((ball, ballIndex) => (
                <div key={ballIndex} className="bg-gradient-to-br from-blue-600 to-blue-400 flex gap-6 my-5 items-center px-3 py-2 text-white rounded-lg">
                  <div className="bg-green-500 w-[80px] h-[35px] rounded-lg flex justify-center items-center">{ball}</div>
                  <div className="flex gap-6 flex-wrap">
                    {options.map((option, optionindex) => (
                      <div
                        key={optionindex}
                        onClick={() => {
                          // handlebidd(over, ball, option,teamA);
                         setshowbid(!showbid),setbidball(ball),setbidover(over),setbidteam(teamA),setbidoption(option)
                        }}
                        className="bg-white text-blue-500 font-extrabold px-3 py-2 rounded-lg min-w-[110px] text-center hover:cursor-pointer text-[400px]"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        )}
        <div className="text-white">team2</div>
        {overs?.map((over, overIndex) =>
          overIndex < finishedovers2?.length ? (
            <div key={overIndex}>
              <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over:{over}</div>
              {finishedovers2[overIndex]?.map((ball, ballIndex) => (
                <div key={ballIndex} className="bg-gradient-to-br from-blue-500 to-blue-400 flex gap-6 my-5 items-center px-3 py-2 text-white rounded-lg">
                  <div className="bg-green-500 w-[80px] h-[35px] rounded-lg flex justify-center items-center">
                    {ballIndex + 1}
                  </div>
                  <div className="flex flex-wrap w-4/6">
                  <div className="h-fit flex items-center min-w-[120px]"> Runs:{ball?.Runs ? (ball?.Runs) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Four:{ball?.isFour ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Six:{ball?.isSix ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Extras:{ball?.Extras ? (ball.Extras) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Dotball:{ball?.isDotball ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  <div className="h-fit flex items-center min-w-[120px]">Wicket:{ball?.isWiket ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
                  </div>
                  </div>
                  
                </div>
              ))}
            </div>
          ) : overIndex === finishedovers2?.length ? (
            <div key={overIndex} ref={elementRef} className="text-red-200">
              {over} Currently Running Over
            </div>
          ) : (
            <div key={overIndex}>
              <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over : {over}</div>
              {balls.map((ball, ballIndex) => (
                <div key={ballIndex} className="bg-gradient-to-br from-blue-600 to-blue-400 flex gap-6 my-5 items-center px-3 py-2 text-white rounded-lg justify-center">
                  <div className="bg-green-500 w-[80px] h-[35px] rounded-lg flex justify-center items-center">{ball}</div>
                  <div className="flex gap-6 flex-wrap">
                    {options.map((option, optionindex) => (
                      <div
                        key={optionindex}
                        onClick={() => {
                          // handlebidd(over, ball, option ,teamB);
                          setshowbid(!showbid),setbidball(ball),setbidover(over),setbidteam(teamB),setbidoption(option)
                        }}
                        className="bg-white text-blue-500 font-extrabold px-3 py-2 rounded-lg min-w-[110px] text-center hover:cursor-pointer text-[400]"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </Layout>

    // <Layout>
    //   <div className="px-5" style={{backgroundImage: `url(${InnerBackground})`}}>
    //     {overs?.map((over, overIndex) =>
    //       overIndex < fiveovers?.length ? (
    //         <div key={overIndex}>
    //           <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over:{over}</div>
    //           {fiveovers[overIndex]?.map((ball, ballIndex) => (
    //             <div key={ballIndex} className="bg-gradient-to-br from-blue-500 to-blue-400 flex gap-6 my-5 items-center px-3 py-2 text-white rounded-lg">
    //               <div className="bg-green-500 w-[80px] h-[35px] rounded-lg flex justify-center items-center">
    //                 {ballIndex + 1}
    //               </div>
    //               <div className="flex flex-wrap w-4/6">
    //               <div className="h-fit flex items-center min-w-[120px]"> Runs:{ball?.Runs ? (ball?.Runs) : (<IoCloseCircle style={{ color: "red" }} />)}
    //               </div>
    //               <div className="h-fit flex items-center min-w-[120px]">Four:{ball?.isFour ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
    //               </div>
    //               <div className="h-fit flex items-center min-w-[120px]">Six:{ball?.isSix ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
    //               </div>
    //               <div className="h-fit flex items-center min-w-[120px]">Extras:{ball?.Extras ? (ball.Extras) : (<IoCloseCircle style={{ color: "red" }} />)}
    //               </div>
    //               <div className="h-fit flex items-center min-w-[120px]">Dotball:{ball?.isDotball ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
    //               </div>
    //               <div className="h-fit flex items-center min-w-[120px]">Wicket:{ball?.isWiket ? (<TiTick style={{ color: "green" }} />) : (<IoCloseCircle style={{ color: "red" }} />)}
    //               </div>
    //               </div>
                  
    //             </div>
    //           ))}
    //         </div>
    //       ) : overIndex === fiveovers?.length ? (
    //         <div key={overIndex} className="text-red-200">
    //           {over} Currently Running Over
    //         </div>
    //       ) : (
    //         <div key={overIndex}>
    //           <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over : {over}</div>
    //           {balls.map((ball, ballIndex) => (
    //             <div key={ballIndex} className="bg-gradient-to-br from-blue-600 to-blue-400 flex gap-6 my-5 items-center px-3 py-2 text-white rounded-lg justify-center">
    //               <div className="bg-green-500 w-[80px] h-[35px] rounded-lg flex justify-center items-center">{ball}</div>
    //               <div className="flex gap-6 flex-wrap">
    //                 {options.map((option, optionindex) => (
    //                   <div
    //                     key={optionindex}
    //                     onClick={() => {
    //                       handlebidd(over, ball, option);
    //                     }}
    //                     className="bg-white text-blue-500 font-extrabold px-3 py-2 rounded-lg min-w-[110px] text-center"
    //                   >
    //                     {option}
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       )
    //     )}
    //   </div>
    // </Layout>
  );
}

export default bidding;
