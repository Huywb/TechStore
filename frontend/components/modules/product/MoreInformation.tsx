import { CircleQuestionMarkIcon, PlaySquareIcon, Share2Icon, TruckIcon } from 'lucide-react'
import React from 'react'

const MoreInformation = () => {
  return (
    <div className='flex items-center justify-between gap-2 text-sm'>
        <div className='flex gap-2'>
            <PlaySquareIcon size={18}/>
            <p>Compare color</p>
        </div>
        <div className='flex gap-2'>
            <CircleQuestionMarkIcon size={18}/>
            <p>Ask a question</p>
        </div>
        <div className='flex gap-2'>
            <TruckIcon size={18}/>
            <p>Delivery & Return</p>
        </div>
        <div className='flex gap-2'>
            <Share2Icon size={18}/>
            <p>Share</p>
        </div>
    </div>
  )
}

export default MoreInformation
