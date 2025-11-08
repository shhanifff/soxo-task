import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, seteMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:1001/api/login", {
      email,
      password,
    });

    console.log("login res", res);

    if (res.data.data) {
      alert("Login completed");
      if (res.data.data.role === "admin") {
        navigate("/dashboard");
        localStorage.setItem("soxoRole", res.data.data.role);
        return;
      }
      navigate("/");
      localStorage.setItem("soxoToken", res.data.token);
      return;
    }

    alert("Login Failed, invalid mail or pass");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-sm">

        <h1 className="text-xl font-semibold text-center mb-6 text-black">
          Login
        </h1>

        <div className="flex flex-col gap-4">

          <div>
            <label className="block text-black text-sm mb-1">Email</label>
            <input
              type="text"
              onChange={(e) => seteMail(e.target.value)}
              className="border border-black w-full h-10 px-3 bg-white text-black rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black w-full h-10 px-3 bg-white text-black rounded-md focus:outline-none focus:border-gray-800"
              placeholder="Enter your password"
            />
          </div>

          <p
            className="text-black text-sm underline cursor-pointer text-right hover:text-gray-700"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </p>

          <button
            className="w-full h-10 bg-black text-white rounded-md hover:bg-gray-800 transition"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
