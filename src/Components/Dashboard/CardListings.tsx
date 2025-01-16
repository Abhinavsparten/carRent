import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.tsx'; 
import { RootState } from '../../redux/store.ts'; 

interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
  make: string;
  color: string;
}

interface CarListingsProps {
  cars: Car[];
  onCardClick: (id: number) => void; 
}

const CarListings: React.FC<CarListingsProps> = ({ cars, onCardClick }) => {
  const filters = useSelector((state: RootState) => state.filters.filters); // Access filters state from Redux
  const selectedColor = useSelector((state: RootState) => state.colorFilter.selectedColor); // Access selected color from Redux

  // Apply filtering logic based on selected filters (make, model, and color)
  const filteredCars = cars.filter((car) => {
    const isMakeMatch = filters.selectedMake ? car.make === filters.selectedMake : true;
    const isModelMatch = filters.selectedModel ? car.model === filters.selectedModel : true;
    const isColorMatch = selectedColor ? car.color === selectedColor : true; // Color filter logic

    // Return the car only if it matches make, model, and color filters
    return isMakeMatch && isModelMatch && isColorMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-y-scroll max-h-[calc(90vh-3rem)]">
      {filteredCars.length > 0 ? (
        filteredCars.map((car, index) => (
          <div key={index}>
            <Card
              id={car.id} 
              name={car.name} 
              model={car.model}
              make={car.make}
              year={car.year}
              price={car.price}
              isAvailable={car.isAvailable}
              image={car.image}
              onCardClick={onCardClick}
            />
          </div>
        ))
      ) : (
        <div>No cars available based on the selected filters.</div>
      )}
    </div>
  );
};

export default CarListings;
