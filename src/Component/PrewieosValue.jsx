
import { useEffect, useRef, useState } from "react"
//dom elementlerini tutmaq ucun useRef istifade edirik 
function PrewieosValue() {
    const [value, setvalue]=useState("")
    const pervValueRef=useRef("")
    useEffect(()=>{
        //deyer deyishdikde evvelki deyeri yadda saxlayirq   
    pervValueRef.current=value
       //dependes 
    },[value])

  return (
    <>
     <input
      type="text" 
      value={value}
      onChange={(e)=>setvalue(e.target.value)}
       />
     <p >Current Value {value}</p>
     <p> Previous Value {pervValueRef.current}</p>
    </>
  )
}

export default PrewieosValue
