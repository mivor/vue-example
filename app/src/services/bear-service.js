import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
});

export default {
  async getBears() {
    const res = await http.get('bears');
    return res.data;
  },
};
