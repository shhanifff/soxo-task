import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  const navigate = useNavigate();

  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  const totalUsers = async () => {
    const res = await axios.get("http://localhost:1001/api/allUsers");
    console.log("all users length", res.data.data.length);
    setUsersCount(res.data.data.length);
  };

  const totalProduct=async ()=>{
    const res= await axios.get("http://localhost:1001/api/allProduct")
    console.log("all products length",res.data.data.length)
    setProductsCount(res.data.data.length)
  }

  useEffect(() => {
    totalUsers();
    totalProduct()
  }, []);


  const role = localStorage.getItem("soxoRole");
  if (role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-600">Access denied</h1>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-black">Dashboard</h1>

          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            onClick={() => navigate("/products")}
          >
            View Product
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="h-32 bg-gray-100 shadow-sm rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-black">{usersCount}</h1>
            <p className="text-black text-sm mt-1">Total Users</p>
          </div>

          <div className="h-32 bg-gray-100 shadow-sm rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-black">{productsCount}</h1>
            <p className="text-black text-sm mt-1">Total Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
