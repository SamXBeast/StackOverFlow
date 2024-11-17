import React from "react";

const RightSidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 p-4 shadow">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">The Overflow Blog</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="text-blue-500">
            <a href="#">The unexpected benefits of mentoring others</a>
          </li>
          <li className="text-blue-500">
            <a href="#">
              Podcast 354: Building for AR with Niantic Labs' augmented reality SDK
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">Featured & Meta</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="text-blue-500">
            <a href="#">Beta release of Collectives™ on Stack Overflow</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-700">Hot Meta Posts</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <span className="font-medium">8</span> Tags [driver] and [device-driver] appear to be redundant
          </li>
          <li>
            <span className="font-medium">27</span> How to handle dupes where A is closed as a dupe of B?
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
