import React, { useState } from "react";

const MyTask = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 ml-4 text-white">
        Delegated tasks
      </h2>
      <div className="tasks bg-gray-100 p-4 ml-8 rounded-lg shadow-md my-4 w-1/2">
        {/* Your code to display delegated tasks */}
      </div>
      <h2 className="text-2xl font-bold mb-4 ml-4 text-white">
        Tasks to be completed
      </h2>
      <div className="tasks bg-gray-100 p-4 ml-8 rounded-lg shadow-md my-4 w-1/2">
        {/* Your code to display tasks to be completed */}
      </div>
    </>
  );
};

export default MyTask;
