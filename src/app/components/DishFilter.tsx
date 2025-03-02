"use client"; 
import { useState } from "react";
import dishListStyles from '../styles/dishList.module.css'; 
import dishItemStyles from '../styles/dishItem.module.css'; 
import buttonStyles from '../styles/button.module.css'; 
import styles from '../styles/DishFilter.module.css';
import Image from 'next/image'; 

interface DishFilterProps {
  initialItems: any[]; 
}

const DishFilter: React.FC<DishFilterProps> = ({ initialItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(initialItems);

  // Handle category change
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredItems(initialItems);
    } else {
      setFilteredItems(initialItems.filter(item => item.fields.category === category));
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Centering the dropdown */}
      <div className={styles.dropdownContainer}>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.dropdown}  // Apply the custom dropdown styles
        >
          <option value="All">All</option>
          <option value="Main Course">Main Course</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
      </div>

      {/* Center the dish list container */}
      <div className={styles.dishListContainer}>
        {/* Display the filtered list */}
        <section className={dishListStyles.dishList}>
          {filteredItems.map((item: any) => (
            <article key={item.sys.id} className={dishItemStyles.dishItem}>
              {item.fields.dishImage && (
                <Image
                  src={`https:${item.fields.dishImage.fields.file.url}`} 
                  alt={item.fields.dishImage.fields.title || "Image of dish"} 
                  width={400} 
                  height={300} 
                />
              )}
              <h2>{item.fields.dishName}</h2>
              <p>{item.fields.price} CAD</p>
              <p>{item.fields.description}</p>
              <button className={buttonStyles.orderButton}>Order</button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DishFilter;
