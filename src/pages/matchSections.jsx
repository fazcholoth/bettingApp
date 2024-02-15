import Layout from '../Components/Layout';
import React ,{useEffect,useState}from 'react'
import Background from '../assets/matchsection.jpg'
import InnerBackground from '../assets/sectionbackground.jpg'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from "../Components/Config/config";
import { Link } from 'react-router-dom';




function matchSections() {

  const navigate = useNavigate();

  const { format , key ,teamaname,teambname} = useParams();

  const [teama,setteama]=useState()
  const [teamb,setteamb]=useState()

  const [match, setmatch] = useState(null);


  const team_a = [{from:0, to:5 , team:"a"},{from:6, to:10 , team:"a"},{from:11, to:15 , team:"a"},{from:16, to:20 , team:"a"}]
  const team_b = [{from:0, to:5 , team:"b"},{from:6, to:10 , team:"b"},{from:11, to:15 , team:"b"},{from:16, to:20 , team:"b"}]

  const oditeam_a = [{from:0, to:5 , team:"a"},{from:6, to:10 , team:"a"},{from:11, to:15 , team:"a"},{from:16, to:20 , team:"a"},{from:21, to:25 , team:"a"},{from:26, to:30 , team:"a"},{from:31, to:35 , team:"a"},{from:36, to:40 , team:"a"},{from:41, to:45 , team:"a"},{from:46, to:50 , team:"a"}]
  const oditeam_b = [{from:0, to:5 , team:"b"},{from:6, to:10 , team:"b"},{from:11, to:15 , team:"b"},{from:16, to:20 , team:"b"},{from:21, to:25 , team:"b"},{from:26, to:30 , team:"b"},{from:31, to:35 , team:"b"},{from:36, to:40 , team:"b"},{from:41, to:45 , team:"b"},{from:46, to:50 , team:"b"}]

  

  

  useEffect(() => {

    if (format=="t20") {
      setteama(team_a)
      setteamb(team_b)
    }else{
      setteama(oditeam_a)
      setteamb(oditeam_b)
    }
    

    // const fetchmatchdata = async () => {
    //     try {
    //       const response = await axios.get(
    //         `${ BASE_URL }matches/specificmatch/${key}`
    //       );
    //       // console.log(response.data);
    //       if (match?.data?.format=='t20') {
    //         setteama(team_a)
    //         setteamb(team_b)
    //       }else{
    //         setteama(oditeam_a)
    //         setteamb(oditeam_b)
    //       }

    //       setmatch(response?.data?.match);
          
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //       setError(error.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchmatchdata();

  }, [])
  
  
const handlesection =(team,from,to)=>{
  navigate(`bidding/${team}/${from}/${to}`)
}
  

  

  return (

<Layout>
 <div className='w-full min-h-screen bg-image bg-cover bg-center flex justify-center h-fit' style={{backgroundImage: `url(${Background})`}}>

    <div  className='md:w-3/5 flex justify-around items-start flex-wrap bg-cover bg-center mt-3 w-fit' style={{backgroundImage: `url(${InnerBackground})`}}>
        <div className="rounded-lg h-fit py-3 px-4 w-1/3 text-white min-w-[200px]">
        <div className='flex justify-center bg-gradient-to-b from-slate-900 to-slate-600 text-xl uppercase rounded-xl py-3 px-2 mb-6  min-h-20 text-center'>{teamaname}</div>
        {teama?.map((item, indexa) => (
          <Link to={`bidding/${item.team}/${item.from}/${item.to}`} key={indexa}> 
          <div className="bg-gradient-to-br from-green-700 to-green-400 text-xl px-3 rounded-lg my-2 py-3 justify-center flex" onClick={()=>{handlesection(item.team,item.from,item.to)}}>
             {item.from} - {item.to}
          </div>
          </Link>

        ))}
        </div>
        <div className="rounded-lg h-fit py-3 px-4 w-1/3 text-white min-w-[210px]">
          <div className='flex justify-center bg-gradient-to-b from-slate-900 to-slate-600 text-xl uppercase rounded-xl py-3 px-2 mb-6  min-h-20 text-center'>{teambname}</div>
        {teamb?.map((item, indexb) => (
         <Link to={`bidding/${item.team}/${item.from}/${item.to}`} key={indexb}> 
          <div  className="bg-gradient-to-br from-green-700 to-green-400 text-xl px-3 rounded-lg my-2 py-3 justify-center flex" onClick={()=>{handlesection(item.team,item.from,item.to)}}>
            
          {item.from} - {item.to}
          </div>
          </Link>
        ))}
        </div>
        
    </div>

 </div>
</Layout>

  )
}

export default matchSections