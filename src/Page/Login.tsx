import { fetchLoginData } from "../Service/Api";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormData } from "../Service/Types"

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;

  const validate = () => {
    if(!emailRegex.test(formData.email)){
      alert("Invalid email format! Please use a valid email format");
      return false;
    }

    if(!passwordRegex.test(formData.password)){
      alert("Invalid password! Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.");
      return false;
    }
    return true;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(!validate()) {
     return;
    }
    try {
      const data = await fetchLoginData(formData.email, formData.password);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/product");
    } catch (error) {
      alert("Login Failed!");
    }
  };

    return (
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <form>
          <label htmlFor="email" className="text-2xl font-semibold text-gray-700 text-center mb-6">Email</label>
          <input 
          className="block w-full bg-transparent border border-black rounded-md py-2 px-10"
          type="email" 
          onChange={handleChange} 
          value={formData.email}
          name="email" 
          placeholder="Ketik emailmu disini"
          required/>
          <label htmlFor="password" className="text-2xl font-semibold text-gray-700 text-center mb-6">Password</label>
          <input 
          className="block w-full bg-transparent border border-black rounded-md py-2 px-10"
          type="password" 
          onChange={handleChange} 
          value={formData.password} 
          name="password"
          placeholder="Masukan password"
          required/>
        </form>
        <button onClick={handleSubmit}>Submit</button>
        <Link to='/register' className='text-black flex flex-wrap'>Doesn't have account? Register now</Link>
        </div>
      </div>
)};

export default Login;