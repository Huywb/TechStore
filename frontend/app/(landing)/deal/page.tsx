import { ProductServices } from '@/app/services/products.service'
import Container from '@/components/modules/layout/Container'
import ProducGrid from '@/components/modules/product/ProducGrid'


const page = async() => {
    const productsHotDeal = await ProductServices.getProductHotDeal()
  return (
    <Container className='bg-gray-100 max-w-full'>
        <div className='max-w-7xl flex mx-auto flex-col gap-6 mt-6'>

        <h1 className='text-lg font-bold underline'>HOT DEAL OF THIS WEEK</h1>
        <ProducGrid products={productsHotDeal}/>

        </div>

    </Container>
  )
}

export default page
