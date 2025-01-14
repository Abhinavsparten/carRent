import React from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

type HeaderProps = {
  onMenuClick: () => void; // Function to handle the menu click
};

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="p-3 border-0 dark:bg-dark-800 flex items-center justify-between">
      {/* Menu Icon */}
      <button
        className="text-gray-800 dark:text-white lg:hidden"
        onClick={onMenuClick} // Call the passed function when the button is clicked
      >
        <FaBars size={24} />
      </button>

      {/* Brand Name */}
      <div className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-800 dark:text-white flex-1 text-center lg:text-left">
        Starcar✨
      </div>

      {/* Moon Icon for Theme Toggle - Hidden on Large Screens */}
      <button className="text-gray-800 dark:text-white ml-4 lg:hidden">
        <FaMoon size={24} />
      </button>

      {/* User Avatar */}
      <div className="ml-4 lg:hidden">
        <img
          src="https://i.postimg.cc/MKyZPpqP/png-clipart-user-icon-foreigners-avatar-child-face.png"
          className="rounded-full w-10 lg:w-14"
          alt="User Avatar"
        />
      </div>

      {/* Large Screen Content */}
      <div className="hidden lg:flex items-center justify-between space-x-6 w-full">
        {/* Theme Switcher */}
        <div className="flex items-center justify-center w-full space-x-6">
          <div className="flex items-center bg-black rounded-full p-1">
            <button className="bg-white px-7 text-sm text-dark dark:bg-gray-600 rounded-full p-3">
              Light mode
            </button>
            <button className="bg-black px-10 text-sm text-white dark:bg-gray-600 rounded-full p-3">
              Dark
            </button>
          </div>
        </div>

        {/* Location and User Avatar in one line */}
        <div className="flex items-center space-x-6">
          <div className="text-lg flex gap-1 text-gray-500 dark:text-white flex items-center">
            <CiLocationOn size={24} />
            <span>New York, US</span>
          </div>

          <div className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/MKyZPpqP/png-clipart-user-icon-foreigners-avatar-child-face.png"
              className="rounded-full w-14"
              alt="User Avatar"
            />
            <span className="text-gray-900 font-bold dark:text-white text-lg">
              Nancy Holloway
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
