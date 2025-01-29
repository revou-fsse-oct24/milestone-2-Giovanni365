import { useState } from "react"

const Input = ()=>{
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

  const handleChangeName = (event: any) => {
    console.log(event.target.value);
    setName(event.target.value)
  }

  const handleChangePassword = (event: any) => {
    console.log(event.target.value);
    setPassword(event.target.value)
  }
const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`hello, kamu gagal`)
  }

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeName} value={name} className="bg-black text-white"/><br/>
        <input type="password" onChange={handleChangePassword} value={password} className="bg-black text-white"/>
        <button>click</button>
        </form>
    </div>
  )
}

export default Input