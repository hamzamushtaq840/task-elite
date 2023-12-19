import { useState } from 'react';
import axios from 'axios';

const usePostData = (url) => {
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    try {
      const response = await axios.post(url, postData);
      return response.data;
    } catch (error) {
      setError(error);
      console.error(`Error posting data to ${url}:`, error);
      throw error;
    }
  };

  return { error, postData };
};

export default usePostData;
