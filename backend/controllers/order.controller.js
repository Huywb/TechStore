import { OrderService } from "../services/order.service.js";

export const getAllOrders = async (req, res) => {
    try {
        const { data, message } = await OrderService.getOrders();
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, message } = await OrderService.getOrderById(id);
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        const { data, message } = await OrderService.createOrder(orderData);
        res.status(201).json({ data, message });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
};
