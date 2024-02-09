import Layout from '../Components/Layout';
import React ,{useEffect,useState}from 'react'
import Background from '../assets/matchsection.jpg'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'


function matchSections() {

  const { key } = useParams();
  const [teama,setteama]=useState([])
  const [teamb,setteamb]=useState([])
  const [match, setmatch] = useState(null);


  const team_a = [{from:0, to:5 , team:"a"},{from:6, to:10 , team:"a"},{from:11, to:15 , team:"a"},{from:16, to:20 , team:"a"}]
  const team_b = [{from:0, to:5 , team:"b"},{from:6, to:10 , team:"b"},{from:11, to:15 , team:"b"},{from:16, to:20 , team:"b"}]

  const oditeam_a = [{from:0, to:5 , team:"a"},{from:6, to:10 , team:"a"},{from:11, to:15 , team:"a"},{from:16, to:20 , team:"a"},{from:21, to:25 , team:"a"},{from:26, to:30 , team:"a"},{from:31, to:35 , team:"a"},{from:36, to:40 , team:"a"},{from:41, to:45 , team:"a"},{from:46, to:50 , team:"a"}]
  const oditeam_b = [{from:0, to:5 , team:"b"},{from:6, to:10 , team:"b"},{from:11, to:15 , team:"b"},{from:16, to:20 , team:"b"},{from:21, to:25 , team:"b"},{from:26, to:30 , team:"b"},{from:31, to:35 , team:"b"},{from:36, to:40 , team:"b"},{from:41, to:45 , team:"b"},{from:46, to:50 , team:"b"}]

  useEffect(() => {
    const fetchmatchdata = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/matches/specificmatch/${key}`
          );
          // console.log(response.data);
          if (match?.data?.format=='t20') {
            setteama(team_a)
            setteamb(team_b)
          }else{
            setteama(oditeam_a)
            setteamb(oditeam_b)
          }

          setmatch(response?.data?.match);
          
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchmatchdata();
  }, [])
  
  

  

  

  return (

<Layout>
 <div className='w-full h-screen bg-image bg-cover bg-center flex justify-center' style={{backgroundImage: `url(${Background})`}}>

    <div  className='w-3/5 bg-blue-700 flex justify-between'>
        <div>
        {teama.map((item, index) => (
          <div key={index}>
            From: {item.from}, To: {item.to},
          </div>
        ))}
        </div>
        <div>
        {teamb.map((item, index) => (
          <div key={index}>
            From: {item.from}, To: {item.to},
          </div>
        ))}
        </div>
        
    </div>

 </div>
</Layout>

  )
}

export default matchSections