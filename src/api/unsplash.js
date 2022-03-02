import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID PiGrBmuYcF6Kq_9coXj80XTPsnImJ2GlUSFpsImVKQ8'
  }
});