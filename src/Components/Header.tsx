import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex i justify-between p-3 border-0 dark:bg-dark-800 ">
      <div className="text-4xl font-bold text-gray-800 dark:text-white">Starcar ✨</div>

      <div className="flex items-center  bg-black rounded-full p-1" >
        <button className=" bg-white px-7 text-sm text-dark dark:bg-gray-600 rounded-full p-3">
          Light mode
        </button>
        <button className=" bg-black px-10 text-sm text-white dark:bg-gray-600 rounded-full p-3">
          dark 
        </button>
        </div>
        <div className='flex gap-4'>
        <div className="text-gray-800 dark:text-white mt-4">New York, US</div>
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/32"
            alt="User profile"
            className="rounded-full"
          />
          <span className="text-gray-800 dark:text-white">Nancy Holloway</span>
        </div>
        </div>
      </div>
  );
};

export default Header;