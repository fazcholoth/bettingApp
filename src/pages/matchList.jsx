
import React  ,{useEffect,useState} from 'react'
import { BASE_URL } from "../Components/Config/config";
import Layout from '../Components/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';



function MatchList() {


  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${ BASE_URL }matches`);
        console.log(response.data);
        setMatches(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMatches();

  }, [])

  

  return (
    <Layout>

          <div className="w-full min-h-screen  p-4 bg-gray-300 text-center flex justify-center">
            {/* <h1 className="text-2xl font-bold mb-4 text-red-500">Cricket Match Betting</h1> */}
            <table className="md:w-[1000px] bg-white border border-gray-300 rounded-xl shadow-2xl text-center h-fit text-[12px] md:text-lg">
              <thead>
                <tr>
                  <th className="py-2 px-2 border-b text-blue-500">Match</th>
                  <th className="py-2 px-2 border-b text-blue-500">Date</th>
                  {/* <th className="py-2 px-4 border-b text-blue-500">Teams</th> */}
                  <th className="py-2 px-2 border-b text-blue-500">Format</th>
                  <th className="py-2 px-2 border-b text-blue-500">Place Bet</th>
                </tr>
              </thead>
              <tbody className='text-center'>
              {matches?.map((match, index) => (
                <tr className='py-10 md:mx-5' key={index}>
                  <td className="py-2 px-2 border-b text-gray-800">{match.name}</td>
                  <td className="py-2 px-2 border-b text-gray-800">Jan 25, 2024</td>
                  {/* <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td> */}
                  <td className="py-2 px-2 border-b text-gray-800">{match.format}</td>
                  <td className="py-2 px-2 border-b text-gray-800">
                    
                    {match.status == "live" && <Link to={`matchsections/${match.key}/${match.format}/${match.teams.a.name}/${match.teams.b.name}`}> <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button></Link>}
                                        
                  </td>
                </tr> 
               ))}  
              </tbody>
            </table>
          </div>





    </Layout>
  )
}

export default MatchList;