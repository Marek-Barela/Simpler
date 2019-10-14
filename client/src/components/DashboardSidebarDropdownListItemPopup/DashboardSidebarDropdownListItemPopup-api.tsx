import axios from "axios";

export const deleteProjectFromDatabase = async (payload: string) => {
  await axios.delete(`/api/tasks/all/${payload}`).then(res => res.data);
  return await axios.delete(`/api/projects/${payload}`).then(res => res.data);
};
