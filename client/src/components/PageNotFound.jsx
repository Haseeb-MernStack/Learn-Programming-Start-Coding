import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        <a
          href="/"
          className="text-center mt-5 cursor-pointer px-4 py-2 border bg-gray-200 rounded-full "
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
