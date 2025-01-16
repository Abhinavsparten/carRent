import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "../../redux/filterSlice.ts"; // Adjust the path accordingly
import { setSelectedColor, resetColorFilter } from "../../redux/colorFilterSlice.ts"; // Use setSelectedColor
import { RootState } from "../../redux/store.ts"; // Import RootState


const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars.cars); // List of all cars
  const filters = useSelector((state: RootState) => state.filters.filters); // Selected filters
  const selectedColor = useSelector((state: RootState) => state.colorFilter.selectedColor); // Selected color from Redux

  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);

  useEffect(() => {
    // Populate makes based on available car data
    const uniqueMakes = Array.from(new Set(cars.map((car: any) => car.make)));
    setMakes(uniqueMakes);
  }, [cars]);

  useEffect(() => {
    if (filters.selectedMake) {
      setLoadingModels(true);
      const filteredModels = cars
        .filter((car: any) => car.make === filters.selectedMake)
        .map((car: any) => car.model);
      setModels(Array.from(new Set(filteredModels)));
      setLoadingModels(false);
    } else {
      setModels([]);
    }
  }, [filters.selectedMake, cars]);

  useEffect(() => {
    // Handle color filtering
    let filteredCars = cars;

    // Filter by make if it's selected
    if (filters.selectedMake) {
      filteredCars = filteredCars.filter(
        (car: any) => car.make === filters.selectedMake
      );
    }

  

  }, [filters.selectedMake, cars]);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMake = e.target.value;
    dispatch(setFilters({ ...filters, selectedMake })); // Update Redux state
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModel = e.target.value;
    dispatch(setFilters({ ...filters, selectedModel })); // Update Redux state
  };

  const handleReset = () => {
    dispatch(resetFilters()); // Reset filters to initial state
    dispatch(resetColorFilter()); // Reset selected colors
  };
  const handleColorChange = (color: string) => {
    dispatch(setSelectedColor(color)); // Toggle the color selection
  };

  return (
    <div className="dark:text-gray-100 dark:bg-gray-800 dark:border-white w-full h-full lg:max-h-[calc(90vh-2rem)] md:max-h-[calc(90vh-3rem)] p-10 bg-gray-100 border mt-3 rounded-3xl">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <span
          className="text-sm text-blue-500 justify-end font-bold mb-4 mt-1 cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </span>
      </div>

      <div className="grid gap-4">
        <div className="flex justify-evenly gap-5">
          {/* Make Filter */}
          <select
            id="make"
            className="dark:bg-gray-800 w-full border rounded px-2 py-4 rounded-3xl bg-white shadow-md"
            value={filters.selectedMake}
            onChange={handleMakeChange}
          >
            <option value="">Select Make</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>

          {/* Model Filter */}
          <select
            id="model"
            className="dark:bg-gray-800 w-full border rounded px-2 py-4 rounded-3xl bg-white shadow-md"
            value={filters.selectedModel}
            onChange={handleModelChange}
            disabled={!filters.selectedMake}
          >
            <option value="">Select Model</option>
            {models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      </div>

    

      {/* Additional Filters (like car type) */}
      <div className="items-center">
        <label className="block font-semibold mb-1 mt-5">Type</label>
        <div className="grid grid-cols-3 gap-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="mr-1 w-6 h-6 border-2 rounded-full" />
            <span>Sedan</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded-full mr-1 w-6 h-6 border-2 rounded-full" />
            <span>Van</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="mr-1 w-6 h-6 border-2 rounded-full" />
            <span>Pickup</span>
          </label>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="mr-1 w-6 h-6 border-2 rounded-full" />
            <span>Wagon</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="mr-1 w-6 h-6 border-2 rounded-full" />
            <span>Minivan</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="mr-1 w-6 h-6 border-2 rounded-full" />
            <span>Couple</span>
          </label>
        </div>
      </div>

        {/* Color Filter Section */}
        <div>
        <label className="block font-semibold mb-1 mt-5">Color</label>
        <div className="grid grid-cols-3 gap-2">
          {["Black", "Silver", "Blue", "White", "Gray", "Brown"].map((color) => (
            <label key={color} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="checkbox-input w-6 h-6 text-blue-600 bg-gray-100  
                rounded focus:bg-blue-500 focus:ring-2"
                checked={selectedColor === color} // Check if this color is selected
                onChange={() => handleColorChange(color)} // Handle color selection
              />
              <span>{color}</span>
            </label>
          ))}
        </div>
        <hr className="my-6 border-t-2 border-gray-300 mt-8" />
      </div>

      {/* Insurance Section */}
      <div className="p-4 bg-card space-y-7">
        <div className="flex items-center mb-4">
          <label className="mr-2 text-muted-foreground">Available now only</label>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>
        <div className="mb-4">
          <label className="block text-muted-foreground mb-2 font-bold">Rental type</label>
          <div className="flex space-x-2">
            <button className="dark:text-gray-800 bg-white text-dark px-4 py-2 rounded-lg shadow-md button-active-focus">Any</button>
            <button className="dark:text-gray-800 bg-white text-dark px-4 py-2 rounded-lg shadow-md button-active-focus">Per day</button>
            <button className="dark:text-gray-800 bg-white text-dark px-4 py-2 rounded-lg shadow-md button-active-focus">Per hour</button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-muted-foreground">Car insurance</label>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" checked />
            <span className="text-muted-foreground">Collision Damage Waiver</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-muted-foreground">Roadside Plus</span>
          </div>
        </div>
      </div>
      <a href="#" className="flex justify-center">All insurance</a>
    </div>
  );
};

export default Filters;
