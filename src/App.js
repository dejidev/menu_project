import React, { useState } from 'react';
import items from './data';
import Categorie from './Category';
import Menu from './Menu';

function App() {

  const allCategories = ['all', ...new Set(items.map((menu) => menu.category))]

  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu </h2>
          <div className="underline"></div>
        </div>
        <Categorie filterItems ={filterItems} categories ={categories}/>
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default App;
