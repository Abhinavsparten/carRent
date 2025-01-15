import React, { useState, useEffect } from 'react';

interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  image: string;
  make: string;
}

interface FiltersProps {
  cars: Car[];
}

const Filters: React.FC<FiltersProps> = ({ cars }) => {
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  // Set makes from cars data
  useEffect(() => {
    const uniqueMakes = Array.from(new Set(cars.map(car => car.make)));
    setMakes(uniqueMakes);
  }, [cars]);

  // Set models based on selected make
  useEffect(() => {
    const filteredModels = cars.filter(car => car.make === selectedMake).map(car => car.model);
    setModels(Array.from(new Set(filteredModels)));
  }, [selectedMake, cars]);

  return (
    <div className="w-full h-full lg:max-h-[calc(90vh-3rem)] md:max-h-[calc(90vh-3rem)] p-10 bg-gray-100 border-r mt-3 rounded-3xl">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <span className="text-sm text-blue-500 justify-end font-bold mb-4 mt-1">Reset</span>
      </div>
      <div className="grid gap-4">
        {/* Brand Filter */}
        <div className="flex justify-evenly gap-5">
          <select
            id="brand"
            className="w-full border rounded px-2 py-4 rounded-3xl bg-white shadow-md"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select Make</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>

          <select
            id="model"
            className="w-full border rounded px-2 py-4 rounded-3xl bg-white shadow-md"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedMake}
          >
            <option value="">Select Model</option>
            {models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* Other Filters */}
        <div className='items-center'>
  <label class="block font-semibold mb-1 mt-5">Type</label>
  <div class="grid grid-cols-3 gap-2">
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Sedan</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="rounded-full mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Van</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Pickup</span>
    </label>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-3">
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Wagon</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Minivan</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Couple</span>
    </label>
  </div>
</div>
 {/* {color filter} */}

 <div>
  <label className="block font-semibold mb-1 mt-5">Color</label>
  <div className="grid grid-cols-3 gap-2">
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox-input checked:bg-black" />
      <span>Black</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox-input checked:bg-gray-300" />
      <span>Silver</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox-input checked:bg-blue-600" />
      <span>Dark Blue</span>
    </label>
  </div>
  <div className="grid grid-cols-3 gap-2 mt-3">
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox-input checked:bg-white" />
      <span>White</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox-input checked:bg-gray-700" />
      <span>Gray</span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox-input checked:bg-orange-900" />
      <span>Brown</span>
    </label>
  </div>
  <hr className="my-6 border-t-2 border-gray-300 mt-8" />
</div>


{/* last section */}
<div class="p-4 bg-card space-y-7">
  <div class="flex items-center mb-4">
    <label class="mr-2 text-muted-foreground">Available now only</label>
    <input type="checkbox" class="toggle toggle-primary" />
  </div>
  <div class="mb-4">
    <label class="block text-muted-foreground mb-2 font-bold">Rental type</label>
    <div class="flex space-x-2 ">
  <button class="bg-white text-dark px-4 py-2 rounded-lg shadow-md button-active-focus">Any</button>
  <button class="bg-white text-dark px-4 py-2 rounded-lg shadow-md button-active-focus">Per day</button>
  <button class="bg-white text-dark px-4 py-2 rounded-lg shadow-md button-active-focus">Per hour</button>
</div>

  </div>
  <div class="mb-4">
    <label class="block text-muted-foreground">Car insurance</label>
    <div class="flex items-center">
      <input type="checkbox" class="mr-2" checked />
      <span class="text-muted-foreground">Collision Damage Waiver</span>
    </div>
    <div class="flex items-center">
      <input type="checkbox" class="mr-2" />
      <span class="text-muted-foreground">Roadside Plus</span>
    </div>
  </div>
</div>
<a href="#" class="text-accent text-center">All insurance</a>
      </div>
    </div>
  );
};

export default Filters;
