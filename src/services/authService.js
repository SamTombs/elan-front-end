import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`;

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const signUp = async (formData) => {
  try {
    // Transform formData to match Django's expected format
    const djangoFormData = {
      username: formData.username,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      password: formData.password,
      password_confirmation: formData.passwordConf, // Match Django serializer field name
    };

    const res = await axios.post(`${BASE_URL}/register/`, djangoFormData, {
      headers: getAuthHeaders()
    });

    if (!res.data) {
      throw new Error("Error something went wrong");
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      
      // Parse token payload
      const tokenParts = res.data.token.split(".");
      const payload = JSON.parse(atob(tokenParts[1]));
      const userPayload = payload.payload || payload.user || payload || payload.sub;
      
      return userPayload;
    }

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (formData) => {
  try {
    console.log("Attempting to sign in with:", { username: formData.username });
    const res = await axios.post(`${BASE_URL}/login/`, formData, {
      headers: getAuthHeaders()
    });

    if (res.data.err) {
      throw new Error(res.data.err);
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      
      // Debug: Let's see what's in the token
      const tokenParts = res.data.token.split(".");
      const payload = JSON.parse(atob(tokenParts[1]));
      console.log("Full token payload:", payload);
      
      // Try different possible structures
      const userPayload = payload.payload || payload.user || payload || payload.sub;
      console.log("Successfully signed in user:", userPayload);
      return userPayload;
    }
  } catch (err) {
    console.error("Sign in error:", err);
  }
};

export { signUp, signIn };
