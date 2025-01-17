import React from "react";
import { useSelector } from "react-redux";
import CarHeader from "./CarHeader.tsx";
import CarDetails from "./CarDetails.tsx";
import Summary from "./Summary.tsx";
import MapImage from "./MapImage.tsx";
import { RootState } from '../../redux/store.ts';

interface CarBookingContainerProps {
  onBack: () => void;
}

const CarBookingContainer: React.FC<CarBookingContainerProps> = ({ onBack }) => {

  // Get the selected car id from the redux state
  const selectedCarId = useSelector((state: RootState) => state.selectedCar.id);

  // Fetch the car data from Redux based on selectedCarId
  const selectedCar = useSelector((state: RootState) =>
    state.cars.cars.find((car) => car.id === selectedCarId)
  );

  // Handle case where no car is selected
  if (!selectedCar) {
    console.log("No car selected");
    return <div>No car selected</div>;
  }

  // Extract car details
  const { price, make, model, year, isAvailable, image, engine, color, fuelType } = selectedCar;


  const totalSummary = {
    totalTime: "1 hour",
    price: `$${price}/hour`,
    taxes: "$10",
    insurance: "$5",
    totalPrice: `$${price + 10 + 5}`,
  };

  // Car details
  const carDetails = {
    year,
    type: engine,
    color,
    rentalType: fuelType,
    insurance: "Standard",
  };

  return (
    <div className="dark:text-gray-100 h-full dark:bg-gray-800 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-4 bg-white 
    rounded-lg lg:px-5 px-1">

      {/* Left Section */}
      <div className="flex flex-col">
        <CarHeader price={`$${price}/hour`} onBack={onBack} />
        <CarDetails carImage={image} carName={make} carDetails={carDetails} />
      </div>

      {/* Right Section */}
      <div className="flex flex-col px-7">
        <MapImage />
        <Summary totalSummary={totalSummary} onRentCar={() => alert('Car rented!')} />
      </div>

    </div>
  );
};

export default CarBookingContainer;
