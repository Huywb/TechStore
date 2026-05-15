'use client'
import { useParams } from "next/navigation"

const TextHeader = ({text}: {text:string}) => {
    const {slug} = useParams()
  return (
    <span className="font-bold text-xl"> 
        {text} <span className="text-green-400">{slug}</span>
    </span>
  )
}

export default TextHeader
