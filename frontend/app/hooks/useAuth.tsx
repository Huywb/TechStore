import { authService } from "../services/auth.service"
import { LoginRequest, RegisterRequest } from "../types/user.type"


export const useAuth = ()=>{

    const AdminRegister = async(value : RegisterRequest) =>{
        try {
            const {data, message} = await authService.Register(value)
            return {data ,message}
        } catch (error) {
            console.log(error)
        }
    }

    const AdminLogin = async(value: LoginRequest)=>{
        try {
            const {data ,token, message} = await authService.Login(value)
            return {data ,token, message}
        } catch (error) {
            console.log(error)
        }
    }


    return {
        AdminRegister,
        AdminLogin
    }
}