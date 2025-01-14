import React from 'react';
import Card from './Card.tsx'; // Import the CarCard component

interface Car {
  name: string;
  model: string;
  year: number;
  pricePerHour: number;
  isAvailable: boolean;
  image: string;
}

interface CarListingsProps {
  cars: Car[];
}

const CarListings: React.FC<CarListingsProps> = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {cars.map((car, index) => (
        <div key={index}>
          <Card 
            name={car.make}
            model={car.model}
            year={car.year}
            pricePerHour={car.price}
            isAvailable={car.isAvailable}
            image={car.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CarListings;
