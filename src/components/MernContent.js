import React, { useEffect, useState } from 'react';

const MernContent = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await fetch('http://localhost:3000/docs');
        if (!response.ok) throw new Error('Failed to fetch the documents');
        const data = await response.json();
        setDocs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

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
    <div className="max-w-6xl mx-auto p-4">
      {docs.map((doc, index) => (
        <div key={index} className="mb-8 p-4 bg-white shadow rounded-lg">
          {/* Header */}
          <div className="flex items-center mb-4">
            <img
              src={doc.author.image}
              alt={doc.author.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{doc.title}</h1>
              <p className="text-gray-600 text-sm">By {doc.author.name}</p>
              <p className="text-gray-500 text-sm">{new Date(doc.date).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Content */}
          <p className="text-lg text-gray-800 mb-6">{doc.content}</p>

          {/* Code Snippets */}
          {doc.codeSnippets && doc.codeSnippets.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Code Snippets</h2>
              <div className="space-y-4">
                {doc.codeSnippets.map((snippet, snippetIndex) => (
                  <pre
                    key={snippetIndex}
                    className="bg-gray-800 text-white p-4 rounded-lg shadow overflow-x-auto"
                  >
                    <code>{snippet.code}</code>
                  </pre>
                ))}
              </div>
            </div>
          )}

          {/* Images */}
          {doc.images && doc.images.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Images</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doc.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image.url}
                      alt={image.altText}
                      className="w-full h-auto object-cover"
                    />
                    <p className="text-gray-600 text-sm mt-2">{image.altText}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MernContent;
