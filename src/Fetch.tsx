import axios from 'axios';

export const fetchData = async <T, > () => {
    try {
      const response = await axios.get<T>('/api/data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};