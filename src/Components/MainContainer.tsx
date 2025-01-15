import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/carsSlice.ts';
import { RootState, AppDispatch } from '../redux/store.ts';
import { setSelectedCar } from '../redux/selectedCarSlice.ts'; // Import the action
import Header from './Header.tsx';
import Dashboard from './Dashboard/Dashboard.tsx';
import Sidebar from './Sidebar.tsx';
import CarBookingContainer from './CarBooking/Container.tsx';

const MainContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, isLoading, error } = useSelector((state: RootState) => state.cars);
  // Get selected car ID from Redux store
  const selectedCarId = useSelector((state: RootState) => state.selectedCar.id); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBackToDashboard = () => {
    console.log("Back button clicked, navigating to Dashboard...");
    // Clear selected car from redux for back funtion
    dispatch(setSelectedCar(null));
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Function to handle back navigation from CarBookingContainer to Dashboard
  const onBack = () => {
    console.log("hi"); // Clear the selected car in Redux
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Find the selected car based on its ID
  const selectedCar = cars.find(car => car.id === selectedCarId);

  return (
    <div className="h-full p-3">
      {/* Header with menu toggle button */}
      <Header onMenuClick={toggleMenu} />

      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Sidebar */}
        <div
          className={`lg:col-span-1 col-span-1 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}
        >
          <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

         {/* Main Content */}
         <div className="lg:col-span-11 md:col-span-12 col-span-12">
          {selectedCarId && selectedCar ? (
            
            <CarBookingContainer car={selectedCar} onBack={handleBackToDashboard} />
          ) : (
            <Dashboard cars={cars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
