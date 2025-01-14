import React from "react";
import CarBooking from "./CarBooking.tsx"; // Adjust the import path as needed

const CarBookingContainer: React.FC = () => {
  const carBookingProps = {
    carName: "Alfa Romeo Giulia Veloce",
    carImage: "https://placehold.co/600x400",
    carPrice: "$23.30",
    carDetails: {
      year: 2024,
      type: "Sedan",
      color: "Dark blue",
      rentalType: "Per hour",
      insurance: "Collision Damage Waiver",
    },
    totalSummary: {
      totalTime: "6 hours",
      price: "$139.80",
      taxes: "$15.20",
      insurance: "$60",
      totalPrice: "$215",
    },
    onRentCar: () => {
      alert("Car rented successfully!");
    },
  };

  return <CarBooking {...carBookingProps} />;
};

export default CarBookingContainer;
