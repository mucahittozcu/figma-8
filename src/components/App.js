"use client"
import { useState } from "react"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const App = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  return (
  <div className="h-screen relative overflow-hidden">

    <img className="absolute bottom-[-0%] left-[-0%] w-[800px] h-[600px]" src={`/Ellipse 1.png`} alt="Ellipse" />

    <img className="absolute top-[-0%] right-[-0%] flex flex-auto w-[500px] h-[650px]" src={`/Ellipse 2.png`} alt="Ellipse" />
   <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
   <div className="flex items-center justify-center h-full overflow-hidden">
  
  <div className="flex flex-col  bg-opacity-100 p-2 pr-10 pt-10 pl-10 rounded-3xl shadow-xl">
        <h1 className="text-7xl font-semibold text-[#02B94B]">LOGIN</h1>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          className="border w-[350px] h-[60px] pl-4 mt-5 rounded-xl"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          className="border w-[350px] h-[60px] pl-4 mt-5 rounded-xl"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
          <button className="bg-[#02B94B] flex justify-center items-center text-white text-xl w-[200px] h-[50px] mt-5 rounded-xl border hover:bg-white hover:border-[#02B94B] hover:text-[#02B94B]">LOGIN</button>
        
        <div className="flex items-center my-5 ">
            <hr className="flex flex-grow bg-slate-950"></hr>
            <span className="text-black text-xl mx-5">OR</span>
            <hr className="flex flex-grow bg-slate-950"></hr>
        </div>

        <div className="flex justify-center ">
            <a href="#" className="pr-6"><FcGoogle size={30} /> </a>
            <a href="#" className="pl-6"><FaFacebook size={30} color="blue" /></a>
        </div>

        <div className="flex justify-between pt-12 pb-2 text-[#02B94B]">
          <a href="#">Forgot password</a>
          <a href="#">Register</a>
        </div>

        </div>
        </div>
           
    </div>
        {/* <div className="bg-gradient-to-r from-[#02B94B] -skew-x-12 -skew-y-12 rotate-90 to-[#043b22] w-[600px] h-[600px] absolute bottom-[-0%] left-[-0%]"></div> */}

  </div>
  )
}
export default App