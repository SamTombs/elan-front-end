import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/products/`;

const getLiftProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/lift`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error fetching lift products:", error);
    throw error;
  }
};

const getExploreProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/explore`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error fetching explore products:", error);
    throw error;
  }
};

const getTheVaultProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/the-vault`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    return response.data;
  } catch (error) {
    console.error("Error fetching the vault products:", error);
    throw error;
  }
};

export { getLiftProducts, getExploreProducts, getTheVaultProducts };
 