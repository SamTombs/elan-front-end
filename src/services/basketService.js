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

const addBasketItem = async (basketId, productId) => {
  try {
    const response = await axios.post(`${BASE_URL}/${basketId}/${productId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error adding basket item:", error);
    throw error;
  }
};

const updateBasketItem = async (basketId, productId, quantity) => {
  try {
    const response = await axios.put(`${BASE_URL}/${basketId}/${productId}`, { quantity }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error updating basket item:", error);
    throw error;
  }
};

const removeBasketItem = async (basketId, productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${basketId}/${productId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error removing basket item:", error);
    throw error;
  }
};

const clearBasket = async (basketId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${basketId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error clearing basket:", error);
    throw error;
  }
};




export { getBasket, getBasketItem, addBasketItem, updateBasketItem, removeBasketItem, clearBasket };