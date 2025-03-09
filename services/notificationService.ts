import apiClient from "../lib/apiClient";

export const fetchNotifications = async () => {
  const response = await apiClient.get("/posts");
  return response;
};

export const createNotification = async (data: any) => {
  const response = await apiClient.post("/posts", data);
  return response;
};

export const updateNotification = async (data: any) => {
  const response = await apiClient.put(`/posts/${data.id}`, data);
  return response;
};

export const deleteNotification = async (id: string) => {
  await apiClient.delete(`/posts/${id}`);
};
