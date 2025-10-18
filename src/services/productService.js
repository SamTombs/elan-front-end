import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/products`;

const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export { getProducts };
