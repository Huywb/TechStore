'use client'
import Container from '../../layout/Container'
import { ShoppingBagIcon } from 'lucide-react'
import OrderSumary from './OrderSumary'
import DeliveryAddress from './DeliveryAddress'
import { CartItem, useStore } from '@/app/store/cart.store'
import ItemCart from './ItemCart'

interface CartClientProps {
    carts: CartItem[]
}

const CartClient:React.FC<CartClientProps> = ({carts}) => {
    const {resetCart} = useStore()
  return (
        <Container>
            <div className='flex gap-2 items-center'>
                <ShoppingBagIcon/>
                <span className='font-bold text-xl'>Shopping Cart</span>
                <button onClick={resetCart} className='ml-4 p-2 border border-red-300 rounded-md px-4 cursor-pointer hover:bg-red-500 hoverEffect bg-red-300 text-white'>Reset Cart</button>
            </div>
            <div className='flex gap-2 mt-5 flex-col md:flex-row xl:flex-row'>
                <div className='flex flex-5 border bg-white p-2 flex-col h-fit'>
                    {
                        carts?.map(((item)=>(
                            <ItemCart key={item.product._id} item={item}/>
                        )))
                    }
                </div>
                <div className='flex flex-2 flex-col gap-8'>
                    <OrderSumary/>
                    <DeliveryAddress />
                </div>
            </div>
        </Container>
  )
}

export default CartClient
