import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Product} from "../Service/Types"

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchProductDetail = async() => {
        if (!id) {
          console.error("ID is not provided");
          console.log("Product ID:", id);
          return;
        } try {
              const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch product details');
              }
              const data: Product = await response.json();
              setProduct(data);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
      fetchProductDetail();
      }, [id]);

    if (loading) {
      return <div className="text-center">Loading...</div>;
    }
    
    if (error) {
      return <div className="text-red-500 text-center">{error}</div>;
    }
    
    if (!product) {
      return <div className="text-center">Product not found.</div>;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-1/2 h-auto object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-lg">{product.description}</p>
        <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
      </div>
    );
};

export default ProductDetail