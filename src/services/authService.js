import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/sign-up`, formData);

    if (!res.data) {
      throw new Error("Error something went wrong");
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const signIn = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/sign-in`, formData);

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