import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL:  "https://zendesk-backend-app.onrender.com"
});

export default instance;