import React from 'react';
import Filters from './Filters.tsx';
import CarListings from './CardListings.tsx';

interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
  make : String;
}

interface CarProps {
  cars: Car[];
}

export const Dashboard: React.FC<CarProps> = ({ cars }) => {
  return (
    <div className="dark:text-gray-100 dark:bg-gray-800 grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-3 h-full p-0">
      <div className="col-span-12 md:col-span-12 lg:col-span-4 ">
        <Filters cars={cars}/>
      </div>
      <div className="col-span-12 md:col-span-12 lg:col-span-8">
        <div className="dark:text-gray-100 dark:bg-gray-800 flex justify-between bg-white gap-2 w-full px-7 mb-2 mt-3">
          <div className="text-xl lg:text-3xl md:text-2xl font-bold">24 cars to rent</div>
          <div className="text-blue-500 font-bold">view all</div>
        </div>
        <CarListings cars={cars} />
      </div>
    </div>
  );
};

export default Dashboard;
