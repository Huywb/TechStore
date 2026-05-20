'use client'
import { useStore } from '@/app/store/cart.store'
import Container from '@/components/modules/layout/Container'
import ProducGrid from '@/components/modules/product/ProducGrid'

const page = () => {
    const FavoriteProducts = useStore(state=>state.favoriteProduct)
  return (
    <Container className='bg-gray-100 max-w-full'>
        <div className='max-w-7xl flex mx-auto flex-col gap-6 mt-6'>

        <h1 className='text-lg font-bold underline'>YOUR FAVORITE PRODUCTS</h1>
        <ProducGrid products={FavoriteProducts}/>

        </div>

    </Container>
  )
}

export default page