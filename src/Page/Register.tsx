import { createUser } from "../Service/Api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "../Service/Types"

const Register: React.FC = () => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;

  const validate = () => {
    if(!emailRegex.test(formRegister.email)){
      alert("Invalid email format! Please use a valid email format");
      return false;
    }

    if(!passwordRegex.test(formRegister.password)){
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
      const data = await createUser(formRegister.name, formRegister.email, formRegister.password);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/login");
    } catch (error) {
      alert("Login Failed!");
    }
  };

    return (
      <div className="bg-gray-100 flex flex-col justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <form>
        <label htmlFor="name" className="text-2xl font-semibold text-gray-700 text-center mb-6">Nama</label>
          <input 
          className="block w-full bg-transparent border border-black rounded-md py-2 px-10"
          type="name" 
          onChange={handleChange} 
          value={formRegister.name}
          name="name" 
          placeholder="Ketik namamu disini"
          required/>
          <label htmlFor="email" className="text-2xl font-semibold text-gray-700 text-center mb-6">Email</label>
          <input 
          className="block w-full bg-transparent border border-black rounded-md py-2 px-10"
          type="email" 
          onChange={handleChange} 
          value={formRegister.email}
          name="email" 
          placeholder="Ketik emailmu disini"
          required/>
          <label htmlFor="password" className="text-2xl font-semibold text-gray-700 text-center mb-6">Password</label>
          <input 
          className="block w-full bg-transparent border border-black rounded-md py-2 px-10"
          type="password" 
          onChange={handleChange} 
          value={formRegister.password} 
          name="password"
          placeholder="Masukan password"
          required/>
        </form>
        <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
)};

export default Register