import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/carsSlice.ts';
import { RootState, AppDispatch } from '../redux/store.ts';
import { setSelectedCar } from '../redux/selectedCarSlice.ts';
import Header from './Header.tsx';
import Dashboard from './Dashboard/Dashboard.tsx';
import Sidebar from './Sidebar.tsx';
import CarBookingContainer from './CarBooking/Container.tsx';

const MainContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, isLoading, error } = useSelector((state: RootState) => state.cars);
  const selectedCarId = useSelector((state: RootState) => state.selectedCar.id);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newTheme);
      return newTheme;
    });
  };

  const handleBackToDashboard = () => {
    dispatch(setSelectedCar(null));
  };

  useEffect(() => {
    dispatch(fetchCars());
    if (isDarkMode) document.documentElement.classList.add('dark');
  }, [dispatch, isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const selectedCar = cars.find((car) => car.id === selectedCarId);

  return (
    <div className="h-full dark:text-gray-100 dark:bg-gray-800">
      <Header onMenuClick={toggleMenu} onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />

      <div className="grid grid-cols-12 gap-4 h-full">
        <div className={`lg:col-span-1 col-span-1 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

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
