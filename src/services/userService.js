import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`;

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
    throw new Error(err);
  }
};

export { getUser };