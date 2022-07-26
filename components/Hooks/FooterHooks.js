import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetchFooter = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFooter(){
        await axios.get(url).then((response) => {
            setData(response.data);
          });
  }
  fetchFooter();
  }, [url])
  return { data,isPending, error };
}
 
export default useFetchFooter;