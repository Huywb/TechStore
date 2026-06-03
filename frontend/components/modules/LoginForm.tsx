'use client'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useState } from 'react'

const formSchema = z.object({
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6, {message:"Password must be at least 6 characters"})
})

type FormValue = z.infer<typeof formSchema>

const LoginForm = () => {
    const {AdminLogin} = useAuth()
    const router = useRouter()
    const [loading,setLoading] = useState(false)

    const { register, handleSubmit } = useForm<FormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleLogin = async(data: FormValue)=>{
        setLoading(true)
        try {
        console.log(data)
            const response = await AdminLogin(data)
            if(!response) {
                toast.error("Something wrong went login ")
            }
            router.push('/admin/dashboard')
        } catch (error) {
            console.log("Error went login Admin", error)            
        } finally {
            setLoading(false)
        }
    }

    return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleLogin)}>
        <h1 className='font-bold text-2xl'>Welcome to TECHSTORE Admin</h1>
        <span className='text-sm text-gray-500'>Your Admin Dashboard</span>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='email' className='text-gray-700'>Email</Label>
            <Input {...register('email')} id='email' type='email' placeholder='Enter your email' className='py-5  outline-none shadow-none'/>
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='password' className='text-gray-700'>Password</Label>
            <Input {...register('password')} id='password' type='password' placeholder='Enter your password' className='py-5 outline-none shadow-none'/>
        </div>
        <Button disabled={loading} type='submit' className='cursor-pointer py-5'>Login</Button>
    </form>
  )
}

export default LoginForm
