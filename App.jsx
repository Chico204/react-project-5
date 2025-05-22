import React, {useState} from 'react';
import {menu} from './data';

const allCategories = ['All', ...new Set (menu.map(item => item.category))]


function App() {
  const [items, setItems] = useState(menu)
  const [categories] = useState(allCategories)
return (
   <div>hello world</div>
  )
}

export default App
