import React, { useEffect, useState } from 'react';
import Filters from './Filters.tsx';
import CarListings from './CardListings.tsx';

interface Car {
  name: string;
  model: string;
  year: number;
  pricePerHour: number;
  isAvailable: boolean;
  image: string;
}

interface CarProps {
  cars: Car[];
}
export const Dashboard: React.FC<CarProps> = ({ cars }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12  gap-3 h-full p-0">
      <div className="col-span-12 md:col-span-4 lg:col-span-4">
        <Filters />
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-8">
        <CarListings cars={cars} />
      </div>
    </div>
  );
};

export default Dashboard;
