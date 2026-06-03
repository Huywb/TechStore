import { OrderItemType, OrderType } from "./order.type"

export interface UserType {
  _id: string
  clerkUserId?: string
  name: string
  email: string
  role: ERole
  password? : string
  isActive: boolean
  createdAt: string
  updatedAt: string
  orders?: OrderType[]
}

export enum ERole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface RegisterRequest {
  email: string,
  name:  string,
  password?: string,
  confirmPassword?: string,
  isActive: boolean,
  role: string
}

export interface LoginRequest {
  email: string,
  password: string
}