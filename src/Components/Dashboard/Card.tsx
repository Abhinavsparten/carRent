import React from 'react';

interface CarCardProps {
  name: string;
  model: string;
  year: number;
  pricePerHour: number;
  isAvailable: boolean;
  imageUrl: string;
}

const Card: React.FC<CarCardProps> = ({ name, model, year, pricePerHour, isAvailable, imageUrl }) => {
  return (
    <div className="border relative rounded-3xl p-4 bg-white dark:bg-gray-800">
      <img src={imageUrl} alt={`${name} ${model}`} className=" w-full h-32 object-cover rounded-md" />
      <div className="mt-4">
      <h3 className=" font-semibold text-gray-500 dark:text-gray-100">
          {model} 
        </h3>
        <div className='flex justify-between'>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {name} , {year}
        </h3>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">${pricePerHour}/hour</p>
        </div>
        <span
          className={`inline-block absolute top-1 mt-2 px-5 py-2 text-sm font-medium rounded-xl ${
            isAvailable ? 'bg-green-400 text-white  ' : 'bg-gray-400 text-white '
          }`}
        >
          {isAvailable ? 'Available' : 'Booked'}
        </span>
      </div>
    </div>
  );
};

export default Card;