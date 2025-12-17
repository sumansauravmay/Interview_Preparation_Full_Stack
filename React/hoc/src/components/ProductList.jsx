import React, { useEffect, useState } from "react";

function ProductList(WrapComponent, api) {
  return function testData(prop) {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {
      fetch(api)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(false);
        });
    }, []);

    return (
      <WrapComponent {...prop} data={data} loading={loading} error={error} />
    );
  };
}

export default ProductList;
