import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`;

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

    const res = await axios.post(`${BASE_URL}/register/`, djangoFormData);

    if (!res.data) {
      throw new Error("Error something went wrong");
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      return JSON.parse(atob(res.data.token.split(".")[1])).payload;
    }

    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || error.message || "Registration failed");
  }
};

const signIn = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/login/`, formData);

    if (res.data.err) {
      throw new Error(res.data.err);
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      return JSON.parse(atob(res.data.token.split(".")[1])).payload;
    }

    throw new Error("Invalid response from server");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { signUp, signIn };