import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

// Create an Axios instance with the JSONP adapter
const axiosInstance = axios.create({
  adapter: jsonpAdapter
});

export default axiosInstance;
