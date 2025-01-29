import React, { useState, useEffect } from 'react';
import { Product, Category} from "../Service/Types"
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async() => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data: Product[] = await response.json();
            setProducts(data);
        }catch (error) {
            console.error('Fetching products error', error);
            throw error
        }
    };
    const fetchCategories = async() => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data: Category[] = await response.json();
            setCategories(data);
        }catch (error) {
            console.error('Fetching categories error', error);
            throw error
        }
    };
    fetchProducts();
    fetchCategories();
  },[])

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category.name === selectedCategory)
  : products;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-cyan-100 p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold text-center">{product.title}</h3>
            <p className="text-lg mt-2 font-bold text-center">${product.price}</p>
            <img src={product.images[0]} className="rounded-lg w-76 mb-2 object-cover"/>
            <Link to={`/product/${product.id}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList