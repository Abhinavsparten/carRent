import React from 'react';
import { FaBars, FaMoon } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';

type HeaderProps = {
  onMenuClick: () => void; // Function to handle the menu click
  onThemeToggle: () => void; // Function to handle theme toggle
  isDarkMode: boolean; // Indicates if dark mode is active
};

const Header: React.FC<HeaderProps> = ({ onMenuClick, onThemeToggle, isDarkMode }) => {
  return (
    <div className="p-3 border-0 dark:text-gray-100 dark:bg-gray-800  flex items-center justify-between">
      {/* Menu Icon */}
      <button
        className="text-gray-800 dark:text-white lg:hidden "
        onClick={onMenuClick} // Call the passed function when the button is clicked
        aria-label="Toggle Menu"
      >
        <FaBars size={24} />
      </button>

      {/* Brand Name */}
      <div className=" dark:text-gray-100 lg:text-4xl md:text-4xl text-2xl font-bold text-gray-800  flex-1 text-center lg:text-left">
        Starcar✨
      </div>

      {/* Theme Toggle Button */}
      <button
        className="text-gray-800 dark:text-white ml-4 lg:hidden"
        onClick={onThemeToggle} // Call the theme toggle function when clicked
        aria-label="Toggle Theme"
      >
        {isDarkMode ? '☀️' : <FaMoon size={24} />}
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
            <button
              className={`${
                isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
              } px-7 text-sm rounded-full p-3`}
              onClick={() => isDarkMode && onThemeToggle()} // Switch to light mode
            >
              Light Mode
            </button>
            <button
              className={`${
                isDarkMode ? 'bg-gray-600 text-white' : 'bg-black text-white'
              } px-10 text-sm rounded-full p-3`}
              onClick={() => !isDarkMode && onThemeToggle()} // Switch to dark mode
            >
              Dark
            </button>
          </div>
        </div>

        {/* Location and User Avatar */}
        <div className="flex items-center space-x-6 shrink-0">
          <div className="text-lg flex gap-1 text-gray-500 dark:text-white items-center">
            <CiLocationOn size={24} />
            <span>New York, US</span>
          </div>

          <div className="flex space-x-6">
            <img
              src="https://i.postimg.cc/MKyZPpqP/png-clipart-user-icon-foreigners-avatar-child-face.png"
              className="rounded-full w-14"
              alt="User Avatar"
            />
            <span className="mt-3 text-gray-900 font-bold dark:text-white text-lg">
              Nancy Holloway
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
