import apiClient from "../lib/apiClient";

export const fetchMessages = async () => {
  const response = await apiClient.get("/messages");
  return response;
};

export const sendMessage = async (data: any) => {
  const response = await apiClient.post("/messages", data);
  return response;
};

export const updateMessage = async (data: any) => {
  const response = await apiClient.put(`/messages/${data.id}`, data);
  return response;
};

export const deleteMessage = async (id: string) => {
  await apiClient.delete(`/messages/${id}`);
};
