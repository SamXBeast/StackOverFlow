import React, { useState, useEffect } from "react";

const QuestionList = ({ searchQuery }) => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("activity"); // Default filter: activity
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        // const response = await fetch(
        //   `https://api.stackexchange.com/2.3/search?order=desc&sort=${filter}&site=stackoverflow${
        //     searchQuery ? `&intitle=${searchQuery}` : ""
        //   }`
        // );
        const endpoint = searchQuery
        ? `https://api.stackexchange.com/2.3/search?order=desc&sort=${filter}&intitle=${searchQuery}&site=stackoverflow`
        : `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`;

      const response = await fetch(endpoint);
        const data = await response.json();
        setQuestions(data.items || []);
      } catch (err) {
        setError("Failed to load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [filter, searchQuery]);

  return (
    <div>
      {/* Filters Section */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === "activity" ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("activity")}
        >
          Activity
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === "creation" ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("creation")}
        >
          Creation
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === "votes" ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("votes")}
        >
          Votes
        </button>
      </div>

      {/* Questions List */}
      {loading ? (
        <p className="text-gray-500 animate-spin rounded-full h-8 w-8 border-t-2 border-orange-500"></p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : questions.length > 0 ? (
        <div className="space-y-4">
          {questions.map((question) => (
            <div
              key={question.question_id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {question.title}
                </a>
              </h3>
              <div className="text-sm text-gray-600">
                <span className="mr-4">
                  <strong>Score:</strong> {question.score}
                </span>
                <span>
                  <strong>Tags:</strong>{" "}
                  {question.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 px-2 py-1 rounded mr-1 hover:bg-orange-500 hover:text-slate-100 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No questions found {searchQuery && `for "${searchQuery}"`}.
        </p>
      )}
    </div>
  );
};

export default QuestionList;
