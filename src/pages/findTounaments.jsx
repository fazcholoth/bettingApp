import Adminlayout from "../Components/AdminLayout";
import Rows from "../Components/Rows";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";


function Tournaments() {

  const {key} = useParams();

  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/matches/tournaments/${key}`,);
        console.log(response.data);
        setTournaments(response?.data?.data?.tournaments);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments(); // Call the function inside useEffect
  }, []);

  return (
    <Adminlayout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        tournaments.map((dataItem, index) => (
          
            <div className='w-full bg-slate-200 flex justify-between my-3 py-2 px-10' key={index}><div>{dataItem.name}</div><div>{dayjs(dataItem.start_at).format('YYYY-MM-DD')}</div><Link to={`/fixture/${dataItem.key}`}><button className='text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1 hover:cursor-pointer'>Choose</button></Link></div>
          
        ))
      )}
    </Adminlayout>
  );
  }

  export default Tournaments
  