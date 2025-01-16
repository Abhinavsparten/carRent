// Card.tsx
import React from 'react';
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setSelectedCar } from '../../redux/selectedCarSlice.ts'; // Import the action

interface CarCardProps {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
}

const Card: React.FC<CarCardProps> = ({ id, name, model,make, year, price, isAvailable, image }) => {
  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleClick = () => {
    dispatch(setSelectedCar(id)); // Dispatch the setSelectedCar action when the card is clicked
    console.log('Selected car id:', id); // Log the selected car id to the console for confirmation
  };

  return (
    <div className="border relative rounded-3xl p-4 bg-white dark:bg-gray-800 cursor-pointer" onClick={handleClick}>
      <img 
        src={image} 
        alt={`${make} ${model}`} 
        className="w-full h-36 object-cover rounded-md" 
        onError={(e) => e.currentTarget.src = 'fallback-image-url.jpg'} // Optional: Use a fallback image in case of error
      />
      <div className="mt-4">
        <h3 className="font-semibold text-gray-500 dark:text-gray-100">{make}</h3>
        <div className='flex justify-between'>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {model}, {year}
          </h3>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">${price}/hour</p>
        </div>
        <span
          className={`inline-block absolute top-5 left-8 mt-2 px-5 py-2 text-sm font-medium rounded-2xl ${
            isAvailable ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
          }`}
        >
          {isAvailable ? 'Available' : 'Booked'}
        </span>
        <span className="absolute top-6 right-7 text-blue-400 text-sm px-2 py-2 rounded-full">
          <FaHeart size={22} />
        </span>
      </div>
    </div>
  );
};

export default Card;
