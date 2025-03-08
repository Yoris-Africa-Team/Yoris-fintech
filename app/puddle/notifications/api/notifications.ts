import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
} from "../services/notificationService";

// Define handlers for each HTTP method
const handlers: Record<string, (req: NextApiRequest, res: NextApiResponse) => Promise<void>> = {
  GET: async (_, res) => {
    const notifications = await fetchNotifications();
    res.status(200).json(notifications);
  },
  POST: async (req, res) => {
    const createdNotification = await createNotification(req.body);
    res.status(201).json(createdNotification);
  },
  PUT: async (req, res) => {
    const updatedNotification = await updateNotification(req.body);
    res.status(200).json(updatedNotification);
  },
  DELETE: async (req, res) => {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "Notification ID is required" });
    }
    await deleteNotification(id as string);
    res.status(204).end(); // No content
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const methodHandler = handlers[req.method || ""];

    if (!methodHandler) {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    await methodHandler(req, res);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
