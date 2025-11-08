import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    if (!title || !price || !description || !image) {
      alert("Fill all fields");
      return;
    }

    const res= await axios.post("http://localhost:1001/api/addProduct",{title,price,description,image})

    console.log("product added res",res)

    alert("Product Added");
    navigate(-1)

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-sm">

        <h1 className="text-xl font-semibold text-center mb-6 text-black">
          Add Product
        </h1>

        <div className="flex flex-col gap-4">

          <div>
            <label className="block text-black text-sm mb-1">Title</label>
            <input
              type="text"
              className="border border-black w-full h-10 px-3 bg-white text-black 
              rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Product title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Price</label>
            <input
              type="number"
              className="border border-black w-full h-10 px-3 bg-white text-black 
              rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Product price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Description</label>
            <textarea
              className="border border-black w-full px-3 py-2 bg-white text-black 
              rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Product description"
              rows="3"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Image URL</label>
            <input
              type="text"
              className="border border-black w-full h-10 px-3 bg-white text-black 
              rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Image URL"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button
            className="w-full h-10 bg-black text-white rounded-md hover:bg-gray-800 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>

        </div>
      </div>
    </div>
  );
}

export default AddProduct;
