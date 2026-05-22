import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

const SALT = 10;
export const AuthService = {
  // Lấy tất cả user
  async getAllUsers() {
    const users = await prisma.user.findMany();
    return { data: users, message: "Users retrieved successfully" };
  },

  //Lấy user theo UserID
  async getUserById(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }
    return { data: user, message: "User retrieved successfully" };
  },

  // Đang ký admin user
  async register(userData) {
    const { email, name, password, confirmPassword } = userData;

    if (!email || !name || !password || !confirmPassword) {
      throw new Error("All fields are required");
    }

    const existEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existEmail) {
      throw new Error("Email already exists");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const hashPasswod = await bcrypt.hash(password, SALT);

    const newAdminUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPasswod,
        role: "ADMIN",
      },
    });
    return {
      data: newAdminUser,
      message: "Admin user registered successfully",
    };
  },

  // Đăng nhập admin user
  async login(userData) {
    const { email, password } = userData;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    return { data: user, message: "Login successful" };
  },

  // Chỉnh sửa isActive ser
  async updateActivateUser(userId, isActive) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: { isActive },
    });
    return {
      data: updateUser,
      message: "User activation status updated successfully",
    };
  },

  // Cập nhật mật khẩu user
  async updateUserPassword(userId, newPassword) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    const hashPassword = await bcrypt.hash(newPassword, SALT);
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: { password: hashPassword },
    });
    return { data: updateUser, message: "User password updated successfully" };
  },

  // Cập nhật profile user
  async updateUserProfile(userId, profleUserData) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: { ...profleUserData },
    });
    return { data: updateUser, message: "User profile updated successfully" };
  },

  // Xóa user
  async deleteUser(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    await prisma.user.delete({
      where: { id: userId },
    });
    return { message: "User deleted successfully" };
  },
};
