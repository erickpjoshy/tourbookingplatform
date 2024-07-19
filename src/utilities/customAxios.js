import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://test.zybotech.in/api/',
  timeout: 2000,
});

export default customAxios;
