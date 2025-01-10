import React from 'react';
import Header from './Header.tsx';
import Dashboard from './Dashboard/Dashboard.tsx';
import Sidebar from './Sidebar.tsx';


export const MainContainer: React.FC = () => {
  

    return (
      
      <div className='h-full p-3'>
        <Header/>
        <div className=" grid grid-cols-12 gap-4 h-full">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11">
          <Dashboard/>
        </div>
      </div>
      </div>
   
    );
};

export default MainContainer;
