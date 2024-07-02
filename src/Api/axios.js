import axios from "axios";
const axiosInstance = axios.create({
  //local Api function
  //baseURL: "http://localhost:5000",
  //Deployed  Api function
  baseURL: "https://bey8tim-amazon-clone-api-deploy-1.onrender.com",
});

export { axiosInstance };
