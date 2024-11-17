import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-orange-500 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} StackOverflow. All rights
          reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://stackoverflow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Visit StackOverflow
          </a>
          <a
            href="https://api.stackexchange.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            StackOverflow API Docs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
