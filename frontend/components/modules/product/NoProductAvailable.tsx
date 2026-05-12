
import { cn } from '@/lib/utils'
import React from 'react'
import {motion} from 'motion/react'
import { Loader2 } from 'lucide-react'

interface NoProductAvailableProps {
    selectedTab?: string,
    className?: string
}

const NoProductAvailable:React.FC<NoProductAvailableProps> = ({selectedTab,className}) => {
  return (
    <div className={cn('bg-gray-100 flex items-center gap-2 min-h-60 justify-center flex-col',className)}>
        <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} transition={{duration:1}}>
            <h2 className='text-2xl font-semibold'>Sản phẩm không có sẵn</h2>
        </motion.div>
        <motion.p className='text-gray-500 text-sm' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}}>
            Chúng tôi xin lỗi, nhưng không có sản phảm nào phù hợp với {selectedTab} lúc này
        </motion.p>
        <motion.div  className='flex gap-1 my-2'  animate={{scale:[1,1.1,1],opacity:1}} transition={{repeat:Infinity,duration:1}}>
            <Loader2 className='animate-spin'/>
            <p>Chúng tôi sẽ bổ sung trong thời gian ngắn nhất</p>
        </motion.div>
        <motion.p className='text-gray-500 text-sm' initial={{opacity:0}} transition={{duration:1,delay:0.4}} animate={{opacity:3}}>
            Hãy quay lại vào lúc khác hoặc chọn các sản phẩm khác của chúng tôi
        </motion.p>
    </div>
  )
}

export default NoProductAvailable
