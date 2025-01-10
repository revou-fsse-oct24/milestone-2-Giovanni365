import React from "react";

interface LoginFormProps {
    email: any;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = React.FC<LoginFormProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  }) => {
  return (
    <div>
        <div>
            <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input 
            type="email" 
            id="email" 
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">
                Email Address
            </label>
            <input 
            type="password" 
            id="password" 
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </form>
        <button type="submit">Login</button>
        <button type="submit">Sign Up</button>
    </div>
  )
}

export default LoginForm