import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const handleFetch = async (url, requestOptions = null) => {
    try {
      setLoading(true);
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };

  return { handleFetch, loading };
};

export default useFetch;
