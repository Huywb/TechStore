import { AuthService } from "../services/auth.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const {data, message} = await AuthService.getAllUsers();
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const {data, message} = await AuthService.getUserById(id);
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createUserAdmin = async (req, res) => {
  try {
    const userData = req.body;
    const { data, message } = await AuthService.register(userData);
    res.status(201).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const userData = req.body;
    const { data, message } = await AuthService.login(userData);
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateActivateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, message } = await AuthService.updateActivateUser(id);
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateUserPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    const { data, message } = await AuthService.updateUserPassword(
      id,
      currentPassword,
      newPassword,
    );
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profileData = req.body;
    const { data, message } = await AuthService.updateUserProfile(id, profileData);
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, message } = await AuthService.deleteUser(id);
    res.status(200).json({ data, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
