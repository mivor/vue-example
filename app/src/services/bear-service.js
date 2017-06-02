import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
});

export default {
  async getBears(count) {
    const res = await server.get('/bears', { params: { count } });
    return res.data;
  },
  async getBear(id) {
    const res = await server.get(`/bear/${id}`);
    return res.data;
  },
  async create(bear) {
    const res = await server.post('/bears', bear);
    const id = res.data.id;
    bear.id = id;
    return bear;
  },
  update(bear) {
    return server.put(`/bear/${bear.id}`, bear);
  },
  delete(id) {
    return server.delete(`/bear/${id}`);
  },
};
