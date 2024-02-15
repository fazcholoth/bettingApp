import Adminlayout from "../Components/AdminLayout";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Components/Config/config";

function adminBallbyball() {
  const { key } = useParams();
  const navigate = useNavigate();

  const [match, setmatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updated, setupdated] = useState();
  const [Sections1, setSections1] = useState([]);
  const [Sections2, setSections2] = useState([]);

  useEffect(() => {
    const fetchmatchdata = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/matches/specificmatch/${key}`
        );
        // console.log(response.data);
        setmatch(response?.data?.match);
        // console.log(response?.data?.section1);
        setSections1(response?.data?.section1);
        setSections2(response?.data?.section2);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchmatchdata();
    console.log("mounted1");
  }, [updated]);

  

  

  const [expandedSections, setExpandedSections] = useState({});

  // Function to toggle the expansion of a five overs section
  const toggleSection = (sectionId) => {
    console.log(Sections1);
    console.log(Sections2);

    // console.log(expandedSections);

    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };


  const update = async ()=>{
    try {
      const response = await axios.get(
        `${ BASE_URL }matches/ballbyball/${key}`
      );
      setupdated(response?.data)
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  }
  

  return (
    <Adminlayout>
      <div>
        {Sections1?.map((section) => (
          <div key={section.id}>
            <div
              onClick={() => toggleSection(section.id)} // Ensure toggleSection handles Sections1 and Sections2 separately
              className="bg-slate-400 flex justify-center mt-5"
            >
              {section.title}
            </div>
            {expandedSections[section.id] && (
              <div>
                {section.data.map((over, index) => (
                  <div key={index} className="flex gap-3 mt-3 w-full">
                    {over?.map((ball, index) => (
                      <div
                        key={index}
                        className="bg-red-500 w-[10%] text-xs px-2 py-2"
                      >
                        <div>Runs : {ball?.Runs}</div>
                        <div>
                          Wicket: {ball && ball.isWicket ? "True" : "False"}
                        </div>
                        <div>
                          Four : {ball && ball.isFour ? "True" : "False"}
                        </div>
                        <div>Six : {ball && ball.isSix ? "True" : "False"}</div>
                        <div>
                          Dotball : {ball && ball.isDotball ? "True" : "False"}
                        </div>
                        <div>Extras : {ball?.Extras}</div>
                      </div>
                    ))}
                    {over?.length === 0 && <div>update{index + 1} over</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Ensure unique keys for Sections2 */}
        {Sections2?.map((section) => (
          <div key={section.id}>
            <div
              onClick={() => toggleSection(section.id + Sections1.length)} // Adjust the id for Sections2
              className="bg-slate-400 flex justify-center mt-5"
            >
              {section.title}
            </div>
            {expandedSections[section.id + Sections1.length] && (
              <div>
                {section.data.map((over, index) => (
                  <div key={index} className="flex gap-3 mt-3 w-full">
                    {over?.map((ball, index) => (
                      <div
                        key={index}
                        className="bg-red-500 w-[10%] text-xs px-2 py-2"
                      >
                        <div>Runs : {ball?.Runs}</div>
                        <div>
                          Wicket: {ball && ball.isWicket ? "True" : "False"}
                        </div>
                        <div>
                          Four : {ball && ball.isFour ? "True" : "False"}
                        </div>
                        <div>Six : {ball && ball.isSix ? "True" : "False"}</div>
                        <div>
                          Dotball : {ball && ball.isDotball ? "True" : "False"}
                        </div>
                        <div>Extras : {ball?.Extras}</div>
                      </div>
                    ))}
                    {over?.length === 0 && <div>update{index + 1} over</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={update}
          className="text-lg my-3 bg-red-500 text-white rounded-xl px-2 py-1"
        >
          Update
        </button>
      </div>
    </Adminlayout>
  );
}

export default adminBallbyball;
