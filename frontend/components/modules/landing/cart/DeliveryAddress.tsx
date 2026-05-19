'use client'
import SelectedComponent from '../SelectedComponent'
import { useAddress } from '@/app/hooks/useAddress'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const DeliveryAddress = () => {

    const {getAllAddress,listAddress} = useAddress()

    const [getAddress,setGetAddress] = useState('')

    const handleSelectedAddress = (address:string)=>{
        setGetAddress(address)
    }

    console.log(getAddress)

    useEffect(()=>{
        getAllAddress()
    },[])
  return (
    <div className='bg-white p-4 flex flex-col gap-4'>
        <h1 className='font-bold text-xl'>Delivery Address</h1>
        <div className='flex flex-col mt-2'>
            <SelectedComponent data={listAddress} setAddress={handleSelectedAddress}/>
        </div>

        <Button className='w-full text-center bg-white text-black mt-2 cursor-pointer hover:bg-gray-50 hoverEffect border border-gray-300'>Add New Address</Button>
    </div>
  )
}

export default DeliveryAddress
