import React from 'react';
import Card from './Card.tsx'; // Import the CarCard component

interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
  make : string;
}

interface CarListingsProps {
  cars: Car[];
  onCardClick: (id: number) => void; // Receive onCardClick function
}

const CarListings: React.FC<CarListingsProps> = ({ cars, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-y-scroll max-h-[calc(90vh-3rem)]">
      {cars.map((car, index) => (
        <div key={index}>
          <Card 
            id={car.id}  // Pass id to the Card component
            name={car.name} // Make sure to use correct properties
            model={car.model}
            make={car.make}
            year={car.year}
            price={car.price}
            isAvailable={car.isAvailable}
            image={car.image}
            onCardClick={onCardClick} // Pass the onCardClick handler
          />
        </div>
      ))}
    </div>
  );
};

export default CarListings;
