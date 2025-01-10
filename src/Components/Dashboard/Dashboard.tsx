import React from 'react';
import Filters from './Filters.tsx';
import  CarListings from './CardListings.tsx';

// Types
interface Car {
  name: string;
  model: string;
  year: number;
  price: number;
}

// Main Dashboard Component
export const Dashboard: React.FC = () => {
  const cars: Car[] = [
    { name: 'Alfa Romeo Giulia', model: 'Veloce', year: 2024, price: 23.3 },
    { name: 'Alfa Romeo Giulia', model: 'Sprint', year: 2024, price: 22.0 },
    { name: 'Alfa Romeo Giulia', model: 'Sprint', year: 2024, price: 22.0 },
    { name: 'Alfa Romeo Giulia', model: 'Sprint', year: 2024, price: 22.0 },
    { name: 'Alfa Romeo Giulia', model: 'Sprint', year: 2024, price: 22.0 },
    { name: 'Alfa Romeo Giulia', model: 'Sprint', year: 2024, price: 22.0 },
    
  ];

  return (
<div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-full p-0">
  {/* Filters Section */}
  <div className="col-span-12 md:col-span-4">
    <Filters />
  </div>
  {/* Car Listings Section */}
  <div className="col-span-12 md:col-span-8">
    <CarListings cars={cars} />
  </div>
</div>


  
  );
};

export default Dashboard;
