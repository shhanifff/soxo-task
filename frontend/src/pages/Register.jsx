import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, seteMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !name || !password) {
      alert("Fill in the Blank");
      return;
    }

    console.log(email, name, password);

    seteMail("");
    setName("");
    setPassword("");

    const res = await axios.post("http://localhost:1001/api/register", {
      email,
      name,
      password,
    });

    console.log("register response", res);

    if (res.data.message === "User Already registered") {
      alert("User Already registered");
      return;
    }

    alert("Register Completed");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-sm">

        <h1 className="text-xl font-semibold text-center mb-6 text-black">
          Register
        </h1>

        <div className="flex flex-col gap-4">

          <div>
            <label className="block text-black text-sm mb-1">Username</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="border border-black w-full h-10 px-3 bg-white text-black rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Email</label>
            <input
              type="text"
              onChange={(e) => seteMail(e.target.value)}
              className="border border-black w-full h-10 px-3 bg-white text-black rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black w-full h-10 px-3 bg-white text-black rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Enter password"
            />
          </div>

          <p
            className="text-black text-sm underline cursor-pointer text-right hover:text-gray-700"
            onClick={() => navigate("/login")}
          >
            Log in
          </p>

          <button
            className="w-full h-10 bg-black text-white rounded-md hover:bg-gray-800 transition"
            onClick={handleRegister}
          >
            Submit
          </button>

        </div>

      </div>
    </div>
  );
}

export default Register;
