import React, { useEffect, useState } from 'react';
import Filters from './Filters.tsx';
import CarListings from './CardListings.tsx';

interface Car {
  name: string;
  model: string;
  year: number;
  price: number;
}

export const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/cars?limit=6');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
        console.log(data)
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
