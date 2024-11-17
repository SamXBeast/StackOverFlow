import React from "react";

const QuestionCard = ({ question }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{question.score} votes</span>
        <span>{question.answer_count} answers</span>
        <span>{question.view_count} views</span>
      </div>
      <h3 className="text-blue-600 font-medium mt-2 cursor-pointer">{question.title}</h3>
      <div className="flex gap-2 mt-2">
        {question.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-xs hover:bg-orange-500 hover:text-slate-100 cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
