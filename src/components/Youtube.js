import React, { useState, useEffect } from "react";

const Youtube = () => {
  const [modulesData, setModulesData] = useState([]); // State to hold the data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from the backend
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await fetch("https://vvbackend.onrender.com/mern/modules"); // Replace with your API URL
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON data
        setModulesData(data); // Update state with fetched data
        setLoading(false);
      } catch (err) {
        setError(err.message); // Set error state
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading modules...</p>;
  if (error) return <p>Error fetching modules: {error}</p>;

  return (
    <div className="bg-gray-50 p-6 sm:p-12 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        MERN Stack Learning Path
      </h1>
      <div className="space-y-12">
        {modulesData.map((module, moduleIndex) => (
          <div key={moduleIndex} className="bg-white shadow-lg rounded-lg">
            {/* Module Header */}
            <div className="bg-indigo-500 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-semibold">{module.moduleName}</h2>
            </div>

            {/* Topics Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700 text-sm uppercase">
                    <th className="py-3 px-4 text-left">Class #</th>
                    <th className="py-3 px-4 text-left">Topic</th>
                    <th className="py-3 px-4 text-left">YouTube Link</th>
                  </tr>
                </thead>
                <tbody>
                  {module.topics.map((topic, topicIndex) => (
                    <tr
                      key={topicIndex}
                      className="border-b text-sm hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">{topic.classNumber}</td>
                      <td className="py-3 px-4">{topic.topicName}</td>
                      <td className="py-3 px-4">
                        <a
                          href={topic.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-5 h-5 mr-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.615 7.052c-.728-.728-1.637-1.128-2.48-1.258C15.498 5.5 12 5.5 12 5.5s-3.498 0-5.135.294c-.843.13-1.752.53-2.48 1.258-.728.728-1.128 1.637-1.258 2.48C3 11.165 3 12.5 3 12.5s0 1.335.127 2.968c.13.843.53 1.752 1.258 2.48.728.728 1.637 1.128 2.48 1.258 1.637.294 5.135.294 5.135.294s3.498 0 5.135-.294c.843-.13 1.752-.53 2.48-1.258.728-.728 1.128-1.637 1.258-2.48.294-1.637.294-2.968.294-2.968s0-1.335-.127-2.968c-.13-.843-.53-1.752-1.258-2.48zM10 15.5v-6l5 3-5 3z" />
                          </svg>
                          Watch Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
