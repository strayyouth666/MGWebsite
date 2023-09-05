import React, { useState, useEffect } from "react";

const LinkPreview = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const getProduct = async (productId) => {
    try {
      const response = await fetch(`https://api.example.com/products/${productId}`);
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default LinkPreview;
