import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-50 p-4 shadow">
      <nav>
        <ul className="space-y-4 cursor-pointer">
          <Link to="/">  
          <li className="font-semibold text-orange-500">Home</li>
          </Link>
          <li className="hover:text-orange-500">Public</li>
          <li className="hover:text-orange-500">Questions</li>
          <li className="hover:text-orange-500">Tags</li>
          <li className="hover:text-orange-500">Users</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
