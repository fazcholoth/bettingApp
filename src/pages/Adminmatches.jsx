import React, { useEffect, useState } from "react";
import Adminlayout from "../Components/AdminLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';


function Matches() {

  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/matches");
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

  const handleManage=(matchkey)=>{
    navigate(`/ballbyball/${matchkey}`)
  }
  

  

  return (
    <Adminlayout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Teams</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {matches?.map((match, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-slate-300"
                >
                  <td className="px-6 py-4">{match.name}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {match.start_at}
                  </td>
                  <td className="px-6 py-4">
                    {match.status !== "live" ? (
                      <div className="w-full flex justify-between">
                        <button
                          onClick={() => {
                            handleRemove(match.key);
                          }}
                          className="text-xs my-0 bg-blue-800 text-white rounded-xl px-2 py-1"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => {
                            handleLive(match.key);
                          }}
                          className="text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1"
                        >
                          Set Live
                        </button>
                      </div>
                    ) : (
                      <div className="w-full flex justify-between">
                        <button
                          onClick={() => {
                            handlenonLive(match.key);
                          }}
                          className="text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1"
                        >
                          Set NonLive
                        </button>
                        <button
                          onClick={() => {
                            handleManage(match.key);
                          }}
                          className="text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1"
                        >
                          Manage
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="w-full flex justify-center mt-5">
        <Link to="/associations">
          <button className="text-lg my-0 bg-red-500 text-white rounded-xl px-2 py-1">
            Add A match
          </button>
        </Link>
      </div>
    </Adminlayout>
  );
}

export default Matches;
