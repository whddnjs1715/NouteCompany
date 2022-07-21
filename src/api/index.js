import axios from 'axios';

export const apiRequest = () => {
  return axios.get('https://test.noutecompany.com/product/list');
};
