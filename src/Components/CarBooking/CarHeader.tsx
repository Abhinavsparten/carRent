import React from "react";

import { IoArrowBack } from "react-icons/io5";

const CarHeader: React.FC<{ carPrice: string }> = ({ carPrice }) => (
  <div className="flex justify-between mt-0 lg:mt-2 md:mt-2">
    <div className="flex gap-2">
      <span className="mt-1">
        <IoArrowBack size={22} />
      </span>
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Booking Car</h2>
    </div>
    <p className="lg:text-3xl md:text-2xl text-xlfont-bold">{carPrice} / hour</p>
  </div>
);

export default CarHeader;
