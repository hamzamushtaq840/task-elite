import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          console.log(`Error fetching from ${url}:`, error);
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false;
    }
  }, [url]);

  return { data };
};

export default useFetchData;