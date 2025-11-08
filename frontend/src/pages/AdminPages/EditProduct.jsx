import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const fetchProduct = async () => {
    const res = await axios.get(
      `http://localhost:1001/api/getProductById/${id}`
    );

    const p = res.data.data;

    setTitle(p.title);
    setPrice(p.price);
    setDescription(p.description);
    setImage(p.image);
  };

  const handleUpdate = async () => {
    if (!title || !price || !description || !image) {
      alert("Fill all fields");
      return;
    }

    const res = await axios.put(
      `http://localhost:1001/api/editById/${id}`,
      {
        title,
        price,
        description,
        image,
      }
    );

    console.log("updated", res.data);

    alert("Product updated");
    navigate(`/ProductDetails/${id}`);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-sm">

        <h1 className="text-xl font-semibold text-center mb-6 text-black">
          Edit Product
        </h1>

        <div className="flex flex-col gap-4">
          
          <div>
            <label className="block text-black text-sm mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="border border-black w-full h-10 px-3 rounded-md bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              className="border border-black w-full h-10 px-3 rounded-md bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Description</label>
            <textarea
              rows="3"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="border border-black w-full px-3 py-2 rounded-md bg-white text-black"
            ></textarea>
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              className="border border-black w-full h-10 px-3 rounded-md bg-white text-black"
            />
          </div>

          <button
            onClick={handleUpdate}
            className="w-full h-10 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Update Product
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditProduct;
