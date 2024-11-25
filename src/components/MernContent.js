import React, { useEffect, useState } from "react";

const MernContent = () => {
  const [docs, setDocs] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [tags, setTags] = useState([]);

  const [sortOption, setSortOption] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await fetch("https://vvbackend.onrender.com/docs");
        if (!response.ok) throw new Error("Failed to fetch the documents");
        const data = await response.json();
        setDocs(data);
        setFilteredDocs(data);
        extractTags(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const extractTags = (docs) => {
      const allTags = docs.flatMap((doc) => doc.tags || []);
      setTags(["All", ...new Set(allTags)]);
    };

    fetchDocs();
  }, []);

  useEffect(() => {
    let updatedDocs = [...docs];

    // Filter by tag
    if (selectedTag !== "All") {
      updatedDocs = updatedDocs.filter((doc) => doc.tags?.includes(selectedTag));
    }

    // Search by title or content
    if (searchTerm) {
      updatedDocs = updatedDocs.filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.content.some((content) =>
            content.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Sort
    if (sortOption === "latest") {
      updatedDocs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "oldest") {
      updatedDocs.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "alphabetical") {
      updatedDocs.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredDocs(updatedDocs);
    setCurrentPage(1); // Reset to first page on filter or sort change
  }, [searchTerm, selectedTag, sortOption, docs]);

  const paginatedDocs = filteredDocs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Update selected tag
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Left Navigation Sidebar */}
      <nav className="w-64 bg-gray-800 text-white min-h-screen p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Technologies</h2>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} className="mb-4">
              <button
                onClick={() => handleTagClick(tag)} // Handle tag click
                className={`hover:text-blue-300 ${selectedTag === tag ? "text-blue-300 font-bold" : ""}`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-4 max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-6 sticky top-0 bg-white z-10 shadow p-4">
          <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
          <div className="flex flex-wrap mt-4 gap-4 sm:hidden md:flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or content"
              className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="latest">Sort by: Latest</option>
              <option value="oldest">Sort by: Oldest</option>
              <option value="alphabetical">Sort by: Alphabetical</option>
            </select>

            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              {tags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </header>

        {/* Content */}
        {paginatedDocs.length > 0 ? (
          paginatedDocs.map((doc, index) => (
            <div key={index} className="mb-8 p-4 bg-white shadow rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={doc.author.image}
                  alt={doc.author.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{doc.title}</h2>
                  <p className="text-gray-600 text-sm">By {doc.author.name}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(doc.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Text Section and Code Snippets */}
              {doc.content?.map((content, contentIndex) => (
                <div key={contentIndex} className="mb-6">
                  <p className="text-gray-800 leading-7 mb-4">{content}</p>
                  {doc.codeSnippets?.[contentIndex] && (
                    <div className="overflow-x-auto max-w-full">
                      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <code>{doc.codeSnippets[contentIndex].code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}

              {/* Images */}
              {doc.images && doc.images.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Images
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {doc.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="rounded-lg overflow-hidden shadow-lg"
                      >
                        <img
                          src={image.url}
                          alt={image.altText}
                          className="w-full h-auto object-cover"
                        />
                        <p className="text-gray-600 text-sm mt-2">
                          {image.altText}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No documents found.</p>
        )}

        {/* Pagination */}
        {filteredDocs.length > itemsPerPage && (
          <div className="flex justify-center mt-6">
            {Array.from(
              { length: Math.ceil(filteredDocs.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-2 py-1 px-4 rounded-lg ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MernContent;
