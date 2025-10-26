import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/basket`;

const getBasketItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`, { 
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching basket items:', error);
    if (error.response?.status === 404) {
      return [];
    }
    throw error;
  }
};

const addToBasket = async (productId, quantity = 1) => {
  try {
    const response = await axios.post(`${BASE_URL}/add/`, {
      product_id: productId,
      quantity: quantity
    }, { 
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } 
    });
    return response.data;
  } catch (error) {
    console.error('Error adding to basket:', error);
    throw error;
  }
};

const updateBasketItem = async (itemId, quantity) => {
  try {
    const response = await axios.put(`${BASE_URL}/items/${itemId}/`, {
      quantity: quantity
    }, { 
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } 
    });
    return response.data;
  } catch (error) {
    console.error('Error updating basket item:', error);
    throw error;
  }
};

const removeFromBasket = async (itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/items/${itemId}/remove/`, { 
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } 
    });
    return response.data;
  } catch (error) {
    console.error('Error removing from basket:', error);
    throw error;
  }
};

export default { getBasketItems, addToBasket, updateBasketItem, removeFromBasket };