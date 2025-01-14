import React from "react";
import CarHeader from "./CarHeader.tsx";
import CarDetails from "./CarDetails.tsx";
import Summary from "./Summary.tsx";
import MapImage from "./MapImage.tsx";

interface CarBookingProps {
  carName: string;
  carImage: string;
  carPrice: string;
  carDetails: {
    year: number;
    type: string;
    color: string;
    rentalType: string;
    insurance: string;
  };
  totalSummary: {
    totalTime: string;
    price: string;
    taxes: string;
    insurance: string;
    totalPrice: string;
  };
  onRentCar: () => void;
}

const CarBooking: React.FC<CarBookingProps> = ({
  carName,
  carImage,
  carPrice,
  carDetails,
  totalSummary,
  onRentCar,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 bg-white rounded-lg lg:px-5 px-1">
    {/* Left Section */}
    <div className="flex flex-col">
      <CarHeader carPrice={carPrice} />
      <CarDetails
        carImage={carImage}
        carName={carName}
        carDetails={carDetails}
      />
    </div>
    {/* Right Section */}
    <div className="flex flex-col px-7">
     <MapImage/>
      <Summary totalSummary={totalSummary} onRentCar={onRentCar} />
    </div>
  </div>
);

export default CarBooking;
