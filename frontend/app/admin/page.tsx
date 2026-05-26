import LoginForm from '@/components/modules/LoginForm'
import AdminImage from '@/public/assets/empty-cart.png'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='flex gap-2 w-full h-full'>
              <div className='flex-1  items-center justify-center flex'>
                  <LoginForm />
              </div>
              <div className='flex-1  items-center justify-center flex  '>
                  <Image src={AdminImage} alt="Admin" width={500} height={500} />
              </div>
        </div>
    </div>
  )
}

export default page
