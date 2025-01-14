import React from 'react';

const Filters: React.FC = () => (
  <div className="w-full h-full md:h-[98%] lg:h-[98%] p-10 bg-gray-100 border-r mt-3 rounded-3xl ">
    <div className='flex justify-between'>
    <h2 className="text-2xl font-bold mb-4">Filters</h2>
    <span className="text-sm  text-blue-500 justify-end font-bold mb-4 mt-1">Reset</span>
    </div>
    <div className="grid gap-4">
      {/* Brand Filter */}
      <div className='flex justify-evenly gap-5 '>

        <select id="brand" className="w-full border rounded px-2 py-4 rounded-3xl bg-white shadow-md">
          <option value="alfa-romeo">Alfa Romeo</option>
        </select>
        <select id="brand" className="w-full border rounded px-2 py-4 rounded-3xl bg-white shadow-md">
          <option value="alfa-romeo">Car model</option>
        </select>
      </div>


      {/* Type Filter */}
      <div className='items-center'>
  <label class="block font-semibold mb-1 mt-5">Color</label>
  <div class="grid grid-cols-3 gap-2">
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Black</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="rounded-full mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Silver</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Dark Blue</span>
    </label>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-3">
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>White</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Gray</span>
    </label>
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="mr-1 w-6 h-6 border-2 rounded-full" />
      <span>Brown</span>
    </label>
  </div>
</div>
 {/* {color filter} */}

<div>
<label class="block font-semibold mb-1 mt-5">Color</label>
<div class="grid grid-cols-3 gap-2">
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="mr-1 w-6 h-6 border-2 border-gray-500 rounded-full appearance-none checked:bg-black  focus:outline-none" />
    <span>Black</span>
  </label>
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="mr-1 w-6 h-6 border-2 border-gray-500 rounded-full appearance-none checked:bg-gray-300  focus:outline-none" />
    <span>Silver</span>
  </label>
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="mr-1 w-6 h-6 border-2 border-gray-500 rounded-full appearance-none checked:bg-blue-600  focus:outline-none" />
    <span>Dark Blue</span>
  </label>
</div>
<div class="grid grid-cols-3 gap-2 mt-3">
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="mr-1 w-6 h-6 border-2 border-gray-500 rounded-full appearance-none checked:bg-white focus:outline-none" />
    <span>White</span>
  </label>
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="mr-1 w-6 h-6 border-2 border-gray-500 rounded-full appearance-none checked:bg-gray-700  focus:outline-none" />
    <span>Gray</span>
  </label>
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="mr-1 w-6 h-6 border-2 border-gray-500 rounded-full appearance-none checked:bg-orange-900  focus:outline-none" />
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
    <label class="block text-muted-foreground">Rental type</label>
    <div class="flex space-x-2">
      <button class="bg-muted text-muted-foreground px-4 py-2 rounded-lg">Any</button>
      <button class="bg-muted text-muted-foreground px-4 py-2 rounded-lg">Per day</button>
      <button class="bg-primary text-primary-foreground px-4 py-2 rounded-lg">Per hour</button>
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

export default Filters;
