import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const signUp = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/register/`, {
      username: formData.username,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      password: formData.password,
      password_confirmation: formData.passwordConf,
    }, {
      headers: getAuthHeaders()
    });

    if (!res.data) {
      throw new Error("Error something went wrong");
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      
      const tokenParts = res.data.token.split(".");
      const payload = JSON.parse(atob(tokenParts[1]));
      const userPayload = payload.payload || payload.user || payload || payload.sub;
      
      return userPayload;
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};

const signIn = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/login/`, formData, {
      headers: getAuthHeaders()
    });

    if (res.data.err) {
      throw new Error(res.data.err);
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      
      const tokenParts = res.data.token.split(".");
      const payload = JSON.parse(atob(tokenParts[1]));
      
      const userPayload = payload.payload || payload.user || payload || payload.sub;
      return userPayload;
    }
  } catch (err) {
    console.error("Sign in error:", err);
    throw err;
  }
};

export { signUp, signIn };
