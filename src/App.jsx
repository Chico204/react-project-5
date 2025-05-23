import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
 const [menuItems, setMenuItems] = useState(items)
 const [categories, setCategories]= useState (allCategories)

 const filterItems = (category) =>{
  if (category === 'all'){
    setMenuItems (items)
    return
  }
  const newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
 }
  return (
  <main>
      <section className="menu py-20 px-0">
        <div className="title text-center mb-2">
          <h2 className='text-4xl font-bolder text-center pt-3'>Our Menu</h2>
          <div className="underline h-1 w-24 bg-yellow-600 mx-auto my-2"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}  />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;