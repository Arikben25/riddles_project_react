import { useEffect } from "react"
import {getAllRiddles} from "../api/riddles.ts"

export default function GetRiddles() {
    useEffect(()=>{
        getAllRiddles()
    })
    
  return (
    <div>GetRiddles
        <ul></ul>
    </div>
  )
}
