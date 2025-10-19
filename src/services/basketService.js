import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/basket`;

const getBasket = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error fetching basket:", error);
    throw error;
  }
};


const getBasketItem = async (basketId, productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${basketId}/${productId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error fetching basket item:", error);
    throw error;
  }
};

export { getBasket, getBasketItem };