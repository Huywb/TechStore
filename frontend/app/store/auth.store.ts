import { create } from "zustand";
import { persist } from "zustand/middleware";


interface AuthState {
  userId: string;
  name: string;
  email: string;
  role: string;

  login: (data: any) => void;
  logout: () => void;
}


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userId: "",
      name: "",
      email: "",
      role: "",

      login: (data) =>
        set(() => ({
          userId: data._id,
          name: data.name,
          email: data.email,
          role: data.role,
        })),

      logout: () =>
        set(() => ({
          userId: "",
          name: "",
          email: "",
          role: "",
        })),
    }),
    {
      name: "auth",
    }
  )
);