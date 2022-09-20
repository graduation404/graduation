import axios from 'axios';
const baseURL = 'http://www.medicalapi.somee.com/';
export default axios.create({
  baseURL: baseURL,
  timeout: 30000,
});
