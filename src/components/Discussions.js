import React, { useState, useEffect } from "react";

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State to store individual comment inputs for each discussion
  const [commentInputs, setCommentInputs] = useState({});
  const [editingComment, setEditingComment] = useState(null); // Track the comment being edited

  const fetchDiscussions = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/discussions?page=${page}&limit=5`, {
        credentials: "include", // Ensure cookies are sent with the request
      });
      if (!response.ok) throw new Error("Failed to fetch discussions");
      const data = await response.json();
      setDiscussions(data.discussions);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewDiscussion = async () => {
    try {
      const response = await fetch("http://localhost:3000/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ content: newDiscussion }),
      });
      const data = await response.json();
      if (data.status) {
        setNewDiscussion("");
        fetchDiscussions(); // Refresh discussions after posting
      } else {
        alert(data.message || "Unable to post discussion");
      }
    } catch (err) {
      alert("Error posting discussion");
    }
  };

  const handleLike = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/discussions/${id}/like`, {
        method: "PATCH",
        credentials: "include",
      });
      const data = await response.json();
      if (data.status) {
        fetchDiscussions(currentPage); // Refresh discussions after liking
      } else {
        alert(data.message || "Unable to like discussion");
      }
    } catch (err) {
      alert("Error liking discussion");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchDiscussions(page);
  };

  // Update the state for a specific discussion's comment input
  const handleCommentChange = (discussionId, value) => {
    setCommentInputs((prevInputs) => ({
      ...prevInputs,
      [discussionId]: value,
    }));
  };

  const handleCommentSubmit = async (discussionId) => {
    const content = commentInputs[discussionId];
    console.log(content)
    if (!content) return;

    try {
      const response = await fetch(`http://localhost:3000/discussions/${discussionId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      if (data.status) {
        // Add the new comment to the discussion locally
        setDiscussions((prevDiscussions) =>
          prevDiscussions.map((discussion) =>
            discussion._id === discussionId
              ? { ...discussion, comments: [...discussion.comments, { content, authorName: "Your Name", createdAt: new Date() }] }
              : discussion
          )
        );
        // Clear the input for the specific discussion
        setCommentInputs((prevInputs) => ({ ...prevInputs, [discussionId]: "" }));
        fetchDiscussions(); // Refresh after posting comment
      } else {
        alert(data.message || "Unable to post comment");
      }
    } catch (err) {
      alert("Error posting comment");
    }
  };

  const handleDeleteComment = async (discussionId, commentId) => {
    console.log(discussionId,  commentId)
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        const response = await fetch(`http://localhost:3000/discussions/${discussionId}/comment/${commentId}`, {
          method: "DELETE",
          credentials: "include",
        });
        const data = await response.json();
        if (data.status) {
          // Remove the deleted comment from the discussion
          setDiscussions((prevDiscussions) =>
            prevDiscussions.map((discussion) =>
              discussion._id === discussionId
                ? {
                    ...discussion,
                    comments: discussion.comments.filter((comment) => comment._id !== commentId),
                  }
                : discussion
            )
          );
        } else {
          alert(data.message || "Unable to delete comment");
        }
      } catch (err) {
        alert("Error deleting comment");
      }
    }
  };

  const handleEditComment = async (discussionId, commentId) => {
    const newContent = prompt("Edit your comment:", "");
    if (newContent === null || newContent === "") return; // No edit or cancel

    try {
      const response = await fetch(`http://localhost:3000/discussions/${discussionId}/comment/${commentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ content: newContent }),
      });
      const data = await response.json();
      if (data.status) {
        // Update the comment locally with new content
        setDiscussions((prevDiscussions) =>
          prevDiscussions.map((discussion) =>
            discussion._id === discussionId
              ? {
                  ...discussion,
                  comments: discussion.comments.map((comment) =>
                    comment._id === commentId ? { ...comment, content: newContent } : comment
                  ),
                }
              : discussion
          )
        );
      } else {
        alert(data.message || "Unable to edit comment");
      }
    } catch (err) {
      alert("Error editing comment");
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-4">
    {/* Top Responsive Section */}
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-6">
  <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
    Your Learning, Your Space
  </h1>
  <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
    This forum is a place to help and inspire each other. Ask questions from live classes, share tips on projects, or simply connect with peers. 
    Together, we learn, grow, and succeed!
  </p>

  <div className="grid md:grid-cols-3 gap-6 text-center">
    {/* Learn Together */}
    <div className="p-6 border-2 border-white rounded-xl shadow-xl bg-opacity-30 bg-white hover:bg-opacity-40 transition">
      <h2 className="text-2xl font-bold mb-2">📘 Learn Together</h2>
      <p className="text-sm md:text-base">
        Facing challenges in your learning journey? Post your questions here and let your peers guide you. Every question matters!
      </p>
    </div>

    {/* Share Your Voice */}
    <div className="p-6 border-2 border-white rounded-xl shadow-xl bg-opacity-30 bg-white hover:bg-opacity-40 transition">
      <h2 className="text-2xl font-bold mb-2">💬 Share Your Voice</h2>
      <p className="text-sm md:text-base">
        Share your thoughts, experiences, or insights about what you’ve learned. Your story could inspire someone to keep going!
      </p>
    </div>

    {/* Collaborate to Succeed */}
    <div className="p-6 border-2 border-white rounded-xl shadow-xl bg-opacity-30 bg-white hover:bg-opacity-40 transition">
      <h2 className="text-2xl font-bold mb-2">🤝 Collaborate to Succeed</h2>
      <p className="text-sm md:text-base">
        Join hands with like-minded peers, form study groups, and tackle challenges as a team.
      </p>
    </div>
  </div>

  <div className="mt-8">
    <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">💡 Quick Tips for Using the Forum:</h3>
    <ul className="list-disc list-inside max-w-3xl mx-auto text-sm md:text-base">
      <li>Be respectful and constructive while interacting with peers.</li>
      <li>Provide detailed context when asking questions for better answers.</li>
      <li>Engage with others' posts by sharing insights or experiences.</li>
      <li>Celebrate milestones and accomplishments together!</li>
    </ul>
  </div>

  <p className="text-center mt-6 text-lg md:text-xl font-medium">
    Start your journey by sharing your first thought or query. We’re here to help each other thrive!
  </p>
</div>


    {/* Create Discussion */}
    <div className="mb-6">
      <textarea
        value={newDiscussion}
        onChange={(e) => setNewDiscussion(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        onClick={handleNewDiscussion}
        className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Post
      </button>
    </div>

    {/* Display Discussions */}
    {discussions.map((discussion) => (
      <div key={discussion._id} className="bg-white p-4 shadow rounded-lg mb-4">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <h3 className="font-bold text-gray-800">{discussion.authorName}</h3>
            <p className="text-gray-500 text-sm">{new Date(discussion.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{discussion.content}</p>
        <div className="flex items-center">
          <button
            onClick={() => handleLike(discussion._id)}
            className="text-blue-500 mr-4"
          >
            👍 {discussion.likes} Like
          </button>
          <span className="text-gray-500 text-sm">{discussion.comments.length} Comments</span>
        </div>

        {/* Comment Section */}
        <div className="mt-4">
          <textarea
            value={commentInputs[discussion._id] || ""}
            onChange={(e) => handleCommentChange(discussion._id, e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></textarea>
          <button
            onClick={() => handleCommentSubmit(discussion._id)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Post Comment
          </button>

          {/* Display Comments */}
          {discussion.comments.map((comment) => (
            <div key={comment._id} className="mt-4 p-4 border-b">
              <div className="w-full mb-2">
                <p className="font-semibold text-orange-800 pb-2">{comment.authorName}</p>
                <p className="text-gray-500">{comment.content}</p>
              </div>
              {/* Edit and Delete buttons below the comment */}
              <div className="mt-2 flex space-x-2">
                <button
                  onClick={() => handleEditComment(discussion._id, comment._id)}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteComment(discussion._id, comment._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    {/* Pagination */}
    {discussions.length > 0 && totalPages > 1 && (
      <div className="flex justify-between mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg shadow ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg shadow ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    )}
  </div>

  );
};

export default Discussions;
