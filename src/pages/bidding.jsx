import Layout from "../Components/Layout";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Components/Config/config";
import { TiTick } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import InnerBackground from '../assets/sectionbackground.jpg'


function bidding() {
  // const [overs,setOvers]=useState()
  const { key, team, from, to } = useParams();

  const start_over = parseInt(from);

  const overs = [
    start_over,
    start_over + 1,
    start_over + 2,
    start_over + 3,
    start_over + 4,
  ];

  const balls = [1, 2, 3, 4, 5, 6];

  const options = ["isWicket", "isFour", "isSix", "isDotball", "isExtra"];

  const [fiveovers, setFiveovers] = useState(null);

  const handlebidd = async (over, ball, option) => {
    console.log(over, ball, option);
    try {
      const response = await axios.post(
        `${BASE_URL}matches/bidding/${key}/${team}`,
        { over, ball, option }
      );
      // setFiveovers(response?.data);
      // setupdated(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setError(error.message);
    }
  };

  useEffect(() => {
    // const fetchovers = async (over, ball, option) => {
    //   try {
    //     const response = await axios.get(
    //       `${BASE_URL}matches/fiveovers/${key}/${team}/${from}`
    //     );
    //     setFiveovers(response?.data.score);
    //     console.log(response.data.score);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     setError(error.message);
    //   }
    // };
    // fetchovers();
  }, []);

  return (
    <Layout>
      <div className="px-5" style={{backgroundImage: `url(${InnerBackground})`}}>
        {overs?.map((over, overIndex) =>
          overIndex < fiveovers?.length ? (
            <div key={overIndex}>
              <div className="text-blue-600 bg-white flex justify-center items-center text-xl font-bold">Over:{over}</div>
              {fiveovers[overIndex]?.map((ball, ballIndex) => (
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
          ) : overIndex === fiveovers?.length ? (
            <div key={overIndex} className="text-red-200">
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
                          handlebidd(over, ball, option);
                        }}
                        className="bg-white text-blue-500 font-extrabold px-3 py-2 rounded-lg min-w-[110px] text-center"
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
  );
}

export default bidding;
