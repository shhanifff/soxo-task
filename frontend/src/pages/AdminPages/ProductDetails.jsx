import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  const handleProduct = async () => {
    const res = await axios.get(
      `http://localhost:1001/api/getProductById/${id}`
    );
    console.log("product by id", res.data.data);
    setProduct(res.data.data);
  };

  useEffect(() => {
    handleProduct();
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-sm">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />

        <h1 className="text-2xl font-bold text-black mb-2">
          {product.title}
        </h1>

        <p className="text-black text-sm mb-4">{product.description}</p>

        <p className="text-xl font-semibold text-black mb-6">
          Price: {product.price}
        </p>

        <p className="text-gray-700 text-sm">
          Product ID: {product._id}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
