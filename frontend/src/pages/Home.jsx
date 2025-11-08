import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    const res = await axios.get("http://localhost:1001/api/allProduct");
    console.log("all products", res.data.data);
    setProducts(res.data.data);
  };

  useEffect(() => {
    allProducts();
  }, []); 

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full">

        <div className="flex justify-between mb-8">
          <h1 className="text-2xl font-semibold text-black">All Products</h1>
          <button
            onClick={() => navigate(`/login`)}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {products.map((item) => (
            <div
              key={item._id}
              className="bg-gray-100 rounded-lg shadow-sm p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <h2 className="text-lg font-semibold text-black capitalize">
                {item.title}
              </h2>

              <p className="text-sm text-black mt-1">{item.description}</p>

              <p className="text-xl text-black font-bold mt-3">
                ${item.price}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Home;
