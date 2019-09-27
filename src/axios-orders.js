import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-eae41.firebaseio.com/"
});

export default instance;
