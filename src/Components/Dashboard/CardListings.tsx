import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.tsx'; // Import the CarCard component
import { RootState } from '../../redux/store.ts'; // Import RootState for accessing Redux store

interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
  make: string;
}

interface CarListingsProps {
  cars: Car[];
  onCardClick: (id: number) => void; // Receive onCardClick function
}

const CarListings: React.FC<CarListingsProps> = ({ cars, onCardClick }) => {
  const filters = useSelector((state: RootState) => state.filters); // Access filters state from Redux

  // Apply filtering logic based on selected filters (make and model)
  const filteredCars = cars.filter((car) => {
    const isMakeMatch = filters.selectedMake ? car.make === filters.selectedMake : true;
    const isModelMatch = filters.selectedModel ? car.model === filters.selectedModel : true;
    return isMakeMatch && isModelMatch;
   
  });
  console.log(filteredCars)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-y-scroll max-h-[calc(90vh-3rem)]">
      {filteredCars.map((car, index) => (
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
