import React from 'react';

const Filters: React.FC = () => (
  <div className="w-full h-[84vh] p-10 bg-gray-100 border-r mt-3 rounded-3xl ">
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

      {/* Price Range */}
      <div>
        <label htmlFor="price-range" className="block font-semibold mb-1">
          Price range per hour
        </label>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span>$22</span>
          <span>$80</span>
        </div>
        <input type="range" id="price-range" className="w-full" min="22" max="80" />
      </div>

      {/* Type Filter */}
      <div>
        <label className="block font-semibold mb-1">Type</label>
        <div className="grid grid-cols-3 gap-2">
          <label>
            <input type="checkbox" className="mr-1" /> Sedan
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <label>
            <input type="checkbox" className="mr-1" /> Sedan
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Type</label>
        <div className="grid grid-cols-3 gap-2">
          <label>
            <input type="checkbox" className="mr-1" /> Sedan
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <label>
            <input type="checkbox" className="mr-1" /> Sedan
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
          <label>
            <input type="checkbox" className="mr-1" /> Van
          </label>
        </div>
      </div>
      <hr/>
    </div>
  </div>
);

export default Filters;
