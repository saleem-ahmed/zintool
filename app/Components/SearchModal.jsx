import React from "react";

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-whites ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-lg h-full">
        <div className="flex justify-start gap-1 items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-[#2492ff]"
            placeholder="Search..."
          />
          <button onClick={onClose} className="text-gray-600">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
