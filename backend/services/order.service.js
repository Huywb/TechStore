import { prisma } from "../lib/prisma";


export const OrderService = {

    //Lấy tất cả đơn hàng
    async getAllOrders() {
        const allOrders = await prisma.order.findMany()
        if(!allOrders) {
            throw new Error("No orders found")
        }
        return { data: allOrders, message: "Orders retrieved successfully" };
    },

    //Lấy đơn hàng theo ID
    async getOrderById(id) {
        const order = await prisma.order.findUnique({
            where: { id }
        });
        if (!order) {
            throw new Error("Order not found");
        }
        return { data: order, message: "Order retrieved successfully" };
    },

    //Tạo đơn hàng mới
    async createOrder(orderData) {
        const newOrder = await prisma.order.create({
            data: orderData
        });
        return { data: newOrder, message: "Order created successfully" };
    }
}