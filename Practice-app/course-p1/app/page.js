"use client"
import { useRouter } from "next/navigation"

const home = ()=> {

  //using router for navigation
  const router = useRouter()
  const navigate = (page)=>{
    router.push(page)
  }
  return (
    <div>
    <h1>This is home page</h1>
    <button onClick={()=>router.push("users/about")}>go To About</button> 
    <button onClick={()=>navigate("users")}>go To Users</button> 
    </div>
    
  )
}
 
export default home