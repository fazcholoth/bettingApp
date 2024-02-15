import Adminlayout from "../Components/AdminLayout"
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { BASE_URL } from "../Components/Config/config";


function Fixture() {

    const {key} = useParams();
    const navigate = useNavigate();

    const [fixture, setFixture] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchFixture = async () => {
        try {
          const response = await axios.get(`${ BASE_URL }matches/fixture/${key}`,);
          console.log(response.data);
          setFixture(response?.data?.data?.matches);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchFixture(); // Call the function inside useEffect
    }, []);



    const chooseMatch = async(key)=>{
        try {
            const response = await axios.post(`${ BASE_URL }matches/addmatch/${key}`,);
            console.log(response.data);
            navigate('/admin');


          } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
          } finally {
            setLoading(false);
          }
    }
  
    return (
      <Adminlayout>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          fixture?.map((dataItem, index) => (
              <div className='w-full bg-slate-200 flex justify-between my-3 py-2 px-10' key={index}><div>{dataItem.name}</div><div>{dayjs(dataItem.start_at).format('YYYY-MM-DD')}</div><button className='text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1 hover:cursor-pointer' onClick={()=>{chooseMatch(dataItem.key)}}>Choose</button></div>
          ))
        )}
      </Adminlayout>
    );
}

export default Fixture