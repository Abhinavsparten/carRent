import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSelectedCar } from "../../redux/selectedCarSlice.ts"; 

interface CarHeaderProps {
  carPrice: string;
}

const CarHeader: React.FC<CarHeaderProps> = ({ price }) => {
  const dispatch = useDispatch(); 

  const handleBackClick = () => {
 
    console.log("Back button clicked, resetting selected car...");
    
    // Dispatch action to reset selected car to null
    dispatch(setSelectedCar(null));
  };

  return (
    <div className="flex justify-between mt-0 lg:mt-2 md:mt-2">
      <div className="flex gap-2">
        <span
          className="mt-1"
          onClick={handleBackClick}  
          style={{ cursor: "pointer" }}
        >
          <IoArrowBack size={22} />
        </span>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Booking Car</h2>
      </div>
      <p className="lg:text-3xl md:text-2xl text-xl font-bold">{price} </p>
    </div>
  );
};

export default CarHeader;
