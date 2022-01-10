import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"


const useContextBase = ()=>{
 return useContext(AuthContext)
}

export default useContextBase;