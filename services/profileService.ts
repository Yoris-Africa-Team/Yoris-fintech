import apiClient from "../lib/apiClient";

export const fetchMyProfile = async () => {
  const response = await apiClient.get("/profiles");
  return response.data;
};

export const createNotification = async (data: any) => {
  const response = await apiClient.post("/profile", data);
  return response.data;
};

export const updateNotification = async (data: any) => {
  const response = await apiClient.put(`/posts/${data.id}`, data);
  return response.data;
};

export const deleteNotification = async (id: string) => {
  await apiClient.delete(`/posts/${id}`);
};
