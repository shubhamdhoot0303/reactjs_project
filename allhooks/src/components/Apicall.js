import React from "react";
import useFetch from "./useFetch";
function Apicall() {
  const BASE_URL = `https://api.quotable.io/random`;
  const { data: quote, loading, error } = useFetch(BASE_URL);
  return (
    <>
      <div>
        <h3>custome hook created</h3>
        {loading && <h3 className="h3">{loading}</h3>}
        {quote && <p>{quote}</p>}
        {error && <h3 className="h3">{error}</h3>}
      </div>
    </>
  );
}

export default Apicall;
