import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState("loader..");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    work(url);
  }, [url]);
  const work = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(`an error occur ${err}`);
      });
  };
  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
