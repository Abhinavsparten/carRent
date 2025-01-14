import React, { useState, useEffect } from "react";
import { GrAppsRounded } from "react-icons/gr";
import { FaRegQuestionCircle, FaRegHeart } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { IoCarOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

type SidebarProps = {
  isMenuOpen: boolean; 
};

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen }) => {
  const [activeButton, setActiveButton] = useState<string>(''); 

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setActiveButton('');
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`lg:flex p-6 h-full flex-col justify-between ${isMenuOpen ? 'block' : 'hidden'}`}
    >
      {/* Top Icons */}
      <div className="space-y-7 flex flex-col">
        <button
          onClick={() => handleButtonClick('apps')}
          className={`sidebar-btn ${activeButton === 'apps' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <GrAppsRounded size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('car')}
          className={`sidebar-btn ${activeButton === 'car' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <IoCarOutline size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('calendar')}
          className={`sidebar-btn ${activeButton === 'calendar' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <CiCalendar size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('heart')}
          className={`sidebar-btn ${activeButton === 'heart' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <FaRegHeart size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('box')}
          className={`sidebar-btn ${activeButton === 'box' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <BsBoxSeam size={28} />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="space-y-7 flex flex-col">
        <button
          onClick={() => handleButtonClick('bell')}
          className={`sidebar-btn ${activeButton === 'bell' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <LuBell size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('question')}
          className={`sidebar-btn ${activeButton === 'question' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <FaRegQuestionCircle size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('settings')}
          className={`sidebar-btn ${activeButton === 'settings' ? 'active-btn' : 'inactive-btn'} px-3 py-2`}
        >
          <IoSettingsOutline size={28} />
        </button>
        <button
          onClick={() => handleButtonClick('logout')}
          className={`sidebar-btn ${activeButton === 'logout' ? 'active-btn' : 'inactive-btn'} logout-btn px-3 py-2`}
        >
          <IoIosLogOut size={28} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
