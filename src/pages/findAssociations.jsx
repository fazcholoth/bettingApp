import React, { useEffect, useState } from "react";
import axios from "axios";
import Adminlayout from "../Components/AdminLayout";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Components/Config/config";


function Associations() {
  
  const [associations, setAssociations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssociations = async () => {
      try {
        const response = await axios.get(`${ BASE_URL }matches/associations`);
        console.log(response.data);
        setAssociations(response?.data?.data?.associations);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssociations(); // Call the function inside useEffect
  }, []);

  return (
    <Adminlayout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        associations?.map((dataItem, index) => (
          
           <div className='w-full bg-slate-200 flex justify-between my-3 py-2 px-10' key={index}><div>{dataItem.name}</div><div>{dayjs(dataItem.start_at).format('YYYY-MM-DD')}</div><Link to={`/tournaments/${dataItem.key}`}><button className='text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1 hover:cursor-pointer'>Choose</button></Link></div>
          
        ))
      )}
    </Adminlayout>
  );
}

export default Associations;
