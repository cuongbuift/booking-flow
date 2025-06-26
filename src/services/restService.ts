import axios from 'axios';

const restService = axios.create({
  baseURL: 'https://685cc6c9769de2bf085dce1f.mockapi.io/api',
});

export default restService;
