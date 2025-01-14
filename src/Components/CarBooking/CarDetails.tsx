import React from "react";
import { FaHeart } from "react-icons/fa";

interface CarDetailsProps {
  carImage: string;
  carName: string;
  carDetails: {
    year: number;
    type: string;
    color: string;
    rentalType: string;
    insurance: string;
  };
}

const CarDetails: React.FC<CarDetailsProps> = ({
  carImage,
  carName,
  carDetails,
}) => (
  <div className="border h-[93%] rounded-3xl p-6 relative mt-3 overflow-hidden">
    {/* Car Image */}
    <img
      src={carImage}
      alt={carName}
      className="w-full h-[250px] lg:h-[350px] md:h-[350px] object-cover rounded-3xl"
    />
    <span className="absolute top-11 left-10 bg-orange-500 text-white text-sm px-4 py-3 rounded-lg">
      New
    </span>
    <span className="absolute top-11 left-28 bg-green-500 text-white text-sm px-5 py-3 rounded-lg">
      Available
    </span>
    <span className="absolute top-11 right-10 bg-white text-blue-400 text-sm px-2 py-2 rounded-full">
      <FaHeart size={22} />
    </span>

    {/* Car Details */}
    <div className="mt-6 lg:space-y-6 md:space-y-6 space-y-3">
      <div className="flex justify-between lg:mt-8 md:mt-8 mt-2 px-6">
        <h2 className="lg:text-2xl md:text-2xl text-lg font-bold ">{carName}</h2>
        <span className="text-yellow-500 text-lg">★ 5</span>
      </div>

      {Object.entries(carDetails).map(([key, value]) => (
        <div className="flex justify-between mt-4 lg:mt-8 md:mt-8 px-6" key={key}>
          <p className="lg:text-lg md:text-lg text-sm capitalize">{key}:</p>
          <p className={`lg:text-lg md:text-lg text-sm capitalize font-semibold ${key === "color" ? "text-blue-600" : ""}`}>
            {value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default CarDetails;