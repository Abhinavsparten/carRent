import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/carsSlice.ts';
import { RootState, AppDispatch } from '../redux/store.ts';
import Header from './Header.tsx';
import Dashboard from './Dashboard/Dashboard.tsx';
import Sidebar from './Sidebar.tsx';
import CarBookingContainer from './CarBooking/Container.tsx';

const MainContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, isLoading, error } = useSelector((state: RootState) => state.cars);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleMenuClick = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle menu state
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-full p-3">

      <Header onMenuClick={handleMenuClick} />

      <div className="grid grid-cols-12 gap-4 h-full">
     
        <div
          className={`lg:col-span-1 col-span-1 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}
        >
          <Sidebar isMenuOpen={isMenuOpen} />
        </div>


        <div className="lg:col-span-11 md:col-span-11 col-span-12">
          <CarBookingContainer cars={cars} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
