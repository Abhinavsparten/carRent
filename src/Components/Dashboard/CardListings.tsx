import React from 'react';
import Card from './Card.tsx';

const cars = [
  {
    id: 1,
    name: 'Alfa Romeo',
    model: 'Giulia Veloce',
    year: 2024,
    pricePerHour: 23.3,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Alfa Romeo',
    model: 'Competizione',
    year: 2024,
    pricePerHour: 20.1,
    isAvailable: false,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  // Add more car objects as needed
  {
    id: 2,
    name: 'Alfa Romeo',
    model: 'Competizione',
    year: 2024,
    pricePerHour: 20.1,
    isAvailable: false,
    imageUrl: 'https://via.placeholder.com/300x200',
  },

  {
    id: 2,
    name: 'Alfa Romeo',
    model: 'Competizione',
    year: 2024,
    pricePerHour: 20.1,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Alfa Romeo',
    model: 'Competizione',
    year: 2024,
    pricePerHour: 20.1,
    isAvailable: false,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Alfa Romeo',
    model: 'Competizione',
    year: 2024,
    pricePerHour: 20.1,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const CarList: React.FC = () => {
  return (
    <div >
      <div className=''>
      <h1 className='text-3xl ms-5 mt-3 font-bold mb-0'>24 cars to rent</h1>
      <span className='text-blue-500 flex justify-end me-5 font-bold'>View all</span>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
      {cars.map((car) => (
        <Card
          key={car.id}
          name={car.name}
          model={car.model}
          year={car.year}
          pricePerHour={car.pricePerHour}
          isAvailable={car.isAvailable}
          imageUrl={car.imageUrl}
        />
      ))}
    </div>
    </div>
  );
};

export default CarList;