import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate=useNavigate()

 const convertToSignIn=()=>{
  navigate("authorization")
 }
 const convertToHome=()=>{
  navigate("/")
 }

  return (
    <div className="w-[100vw] bg-[#242323] border-b-[0.02rem] border-[#b9b6b6] px-[3rem] py-[1rem] flex items-center justify-between" >
      <span onClick={convertToHome}>
      <p className="font-extrabold text-[2rem] cursor-pointer text-[white] ">BitBlogs</p>
      </span>
      
      <div className="flex gap-[1rem] ">
        <button className="text-[1.3rem] font-medium text-[#686666] " >Home</button> 
        <button className="text-[1.3rem] font-medium text-[#686666] " >Write</button>
        <button className="text-[1.3rem] font-medium text-[#686666] " >About</button>
      </div>

      <div className="flex ">
        <div>search</div>
        <button onClick={convertToSignIn} className="bg-[rgb(0,0,255)] h-[3rem] rounded-[0.5rem] w-[7rem] text-[1.3rem] text-[white] ">Sign In</button>
        <div>langs</div>
        <div>modes</div>
      </div>
    </div>
  )
}
