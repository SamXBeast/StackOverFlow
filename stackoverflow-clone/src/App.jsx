import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import QuestionList from "./components/QuestionList";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-1 p-4">
                <h2 className="text-xl font-bold mb-4">Top Questions</h2>
                <QuestionList searchQuery={searchQuery} />
              </div>
            }
          />
        </Routes>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
