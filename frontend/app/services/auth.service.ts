import { LoginRequest, RegisterRequest } from "../types/user.type";
import BASE_URL from "../common/Base_Api";
import { API_PATH } from "../common/Api_Route";


export const authService = {
    async Register(data : RegisterRequest ){
        const response = await BASE_URL.post(API_PATH.AUTH.CREATE_ADMIN_USER,data)
        const res = await response.data
        return res
    },

    async Login(data: LoginRequest){
        const response = await BASE_URL.post(API_PATH.AUTH.LOGIN_ADMIN,data)
        const res = await response.data
        return res        
    }
}