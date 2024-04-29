// userAPI.ts
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchUsers = async () => {
  try {
    let url = `${API_URL}/epHome/getHomeTodoData?email=Tommy12.Lin@advantech.com.tw`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
