
import React from 'react'


function MatchList() {

  // const column = {
  //   name: "ID"
  // },
  // {
  //   name:"Teams"
  // },
  // {
  //   name:"Time"
  // },
  // {
  //   "Venue"
  // },
  // {
  //   name: "Status"
  // }

  return (
    <>

      {/* <div className="w-full min-h-screen top-0"> */}
        {/* <div className="bg-gray-300 w-full h-screen flex justify-center items-center gap-10 text-white"> */}
          <div className="w-full min-h-screen mx-auto p-4 bg-gray-300 text-center flex justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 text-red-500">Cricket Match Betting</h1>
            <table className="w-[1000px] bg-white border border-gray-300 rounded-xl shadow-2xl text-center ml-52">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-blue-500">Match</th>
                  <th className="py-2 px-4 border-b text-blue-500">Date</th>
                  <th className="py-2 px-4 border-b text-blue-500">Teams</th>
                  <th className="py-2 px-4 border-b text-blue-500">Odds</th>
                  <th className="py-2 px-4 border-b text-blue-500">Place Bet</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-800">Match 2</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 26, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team C vs Team D</td>
                  <td className="py-2 px-4 border-b text-gray-800">1.5 vs 2.5</td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                {/* <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr>
                <tr className='py-10 mx-5'>
                  <td className="py-2 px-4 border-b text-gray-800">Match 1</td>
                  <td className="py-2 px-4 border-b text-gray-800">Jan 25, 2024</td>
                  <td className="py-2 px-4 border-b text-gray-800">Team A vs Team B</td>
                  <td className="py-2 px-4 border-b text-gray-800">2.0 </td>
                  <td className="py-2 px-4 border-b text-gray-800">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Bet Now</button>
                  </td>
                </tr> */}
                
              </tbody>
            </table>
          </div>
        {/* </div> */}


      {/* </div> */}



    </>
  )
}

export default MatchList;