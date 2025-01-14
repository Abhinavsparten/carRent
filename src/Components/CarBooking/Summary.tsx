import React from "react";

interface SummaryProps {
    totalSummary: {
      totalTime: string;
      price: string;
      taxes: string;
      insurance: string;
      totalPrice: string;
    };
    onRentCar: () => void;
  }
  
  const Summary: React.FC<SummaryProps> = ({ totalSummary, onRentCar }) => (
    <div className="bg-gray-900 text-white p-2 lg:p-6 md:p-6 rounded-3xl mt-5 px-12">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label className="block text-md font-bold">Pick-up date and time</label>
    <div className="mt-3 flex items-center gap-2 bg-gray-800 text-white rounded-2xl p-2 text-sm">
      <input
        type="date"
        // value={pickUpDate}
        // onChange={(e) => setPickUpDate(e.target.value)}
        className="bg-gray-800 text-white rounded-2xl p-2 text-sm w-full"
      />
      <input
        type="time"
        // value={pickUpTime}
        // onChange={(e) => setPickUpTime(e.target.value)}
        className="bg-gray-800 text-white rounded-2xl p-2 text-sm w-full"
      />
    </div>
  </div>

  <div>
    <label className="block text-md font-bold">Drop-off date and time</label>
    <div className="mt-3 flex items-center gap-2 bg-gray-800 text-white rounded-2xl p-2 text-sm">
      <input
        type="date"
        // value={pickUpDate}
        // onChange={(e) => setPickUpDate(e.target.value)}
        className="bg-gray-800 text-white rounded-2xl p-2 text-sm w-full"
      />
      <input
        type="time"
        // value={pickUpTime}
        // onChange={(e) => setPickUpTime(e.target.value)}
        className="bg-gray-800 text-white rounded-2xl p-2 text-sm w-full"
      />
    </div>
  </div>
</div>


      {Object.entries(totalSummary).map(([key, value], index) => (
        <React.Fragment key={key}>
          <div className="flex justify-between mt-3 px-3 lg:px-6 md:px-6">
            <p className="text-sm lg:text-lg md:text-lg capitalize">{key}:</p>
            <p className="text-sm lg:text-lg md:text-lg font-semibold">{value}</p>
          </div>
          {index < Object.keys(totalSummary).length - 1 && (
            <hr className="my-2 border-t-2 border-gray-500" />
          )}
        </React.Fragment>
      ))}
      <div className="flex justify-between mt-2">
        <p className="font-bold text-lg lg:text-2xl md:text-2xl">Total price:</p>
        <button
          onClick={onRentCar}
          className="bg-blue-500 text-white hover:bg-primary/80 py-1 lg:py-13 md:py-3
          rounded-3xl px-6 lg:px-14 md:px-14 mb-2"
        >
          Rent car
        </button>
      </div>
    </div>
  );
  
  export default Summary;
  