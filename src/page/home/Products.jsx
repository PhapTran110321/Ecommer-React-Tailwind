import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../../../../Downloads/react-ecommerce-minimal-website-main/src/components/Card";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setFilteredItems(data);
        setJsonData(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? jsonData
        : jsonData.filter((item) => item.category === category);

    setSelectedCategory(category);
    setFilteredItems(filtered);
  };

  const showAll = () => {
    setSelectedCategory("all");
    setFilteredItems(jsonData);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low to high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high to low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto mb-12 xl:px-28 px-4">
      <h2 className="text-3xl font-semibold text-center my-8">
        Or Subcribe To The Newsletter
      </h2>
      <div className="flex flex-cold md:flex-row md:justify-between items-center mb-8 space-y-3">
        <div className="flex flex-row justify-start md:gap-8 gap-4 flex-wrap">
          <button
            onClick={showAll}
            className={selectedCategory === "all" ? "active" : ""}
          >
            All Products
          </button>
          <button
            onClick={() => filterItems("Dress")}
            className={selectedCategory === "Dress" ? "active" : ""}
          >
            Clothing
          </button>
          <button
            onClick={() => filterItems("Hoodies")}
            className={selectedCategory === "Hoodies" ? "active" : ""}
          >
            Hoodies
          </button>
          <button
            onClick={() => filterItems("Bag")}
            className={selectedCategory === "Bag" ? "active" : ""}
          >
            Bag
          </button>
        </div>
        <div className="flex justify-end rounded-sm">
          <div className="bg-black p-2">
            <FaFilter className="w-4 h-4 text-white" />
          </div>
          <select
            className="bg-black text-white px-2 py-1"
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCTs CARD */}
      <Card filteredItems={filteredItems} />
    </div>
  );
};

export default Products;
