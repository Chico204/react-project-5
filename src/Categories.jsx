import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container text-center">
      {categories.map((category, index) => {
        return (
          
          <button
            type="button"
            className="filter-btn  bg-transparent text-yellow-600  text-transform: capitalize border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300 ease-in-out px-4 py-2 rounded-[10px] m-2  "
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
          
        );
      })}
    </div>
  );
};

export default Categories;