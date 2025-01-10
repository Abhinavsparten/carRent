import React from 'react';
import { GrAppsRounded } from "react-icons/gr";
import { FaRegQuestionCircle,FaRegHeart  } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { IoCarOutline ,IoSettingsOutline} from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

const Sidebar: React.FC = () => (

<div className="p-6 h-full flex flex-col justify-between">
  {/* Top Icons */}
  <div className="ms-7 space-y-7 flex flex-col">
    <button className=""><GrAppsRounded size={28} /></button>
    <button className=""><IoCarOutline size={28} /></button>
    <button className=""><CiCalendar size={28} /></button>
    <button className=""><FaRegHeart size={28} /></button>
    <button className=""><BsBoxSeam size={28} /></button>
  </div>

  {/* Bottom Icons */}
  <div className="ms-7 space-y-7 flex flex-col">
    <button className=""><LuBell size={28} /></button>
    <button className=""><FaRegQuestionCircle size={28} /></button>
    <button className=""><IoSettingsOutline size={28} /></button>
    <button className="text-red-600 font-bold"><IoIosLogOut size={28} /></button>
  </div>
</div>




);

export default Sidebar;
