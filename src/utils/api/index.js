import axios from 'axios';

const api = (url, options) => axios.get(url, options).then(response => response.data);

export default api;
