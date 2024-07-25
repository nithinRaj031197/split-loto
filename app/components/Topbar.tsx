import { useState } from "react";

const TopBar = ({ handleLoginClick, handleSignupClick}:any) => {
  return (
    <div>
      <div className="text-black p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="text-2xl font-bold">💵</div>
          <div className="text-2xl font-bold">ItsSplit</div>
        </div>
        <nav className="flex gap-4 mr-6">
          <button onClick={handleLoginClick}>Log in</button>
          <button onClick={handleSignupClick} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Sign up
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
