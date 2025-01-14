import React, { useEffect } from 'react';
import Header from './Header.tsx';
import Dashboard from './Dashboard/Dashboard.tsx';
import Sidebar from './Sidebar.tsx';
import CarBookingContainer from './CarBooking/Container.tsx';

export const MainContainer: React.FC = () => {

  return (
    <div className="h-full p-3">
      <Header />
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="lg:col-span-1 md:col-span-1 col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-11 md:col-span-11 col-span-12">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
