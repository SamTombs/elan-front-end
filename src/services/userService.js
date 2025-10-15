import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`;

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const getUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/user/`, {
      headers: getAuthHeaders()
    });

    if (res.data.err) { 
      throw new Error(res.data.err);
    }

    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { getUser };