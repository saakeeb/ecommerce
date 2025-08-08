import { useState, useEffect } from "react";

export const useFetchProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat);
      setFilter(updatedList);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const products = await response.json();
        if (isMounted) {
          setData(products);
          setFilter(products); // initially show all products
        }
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    getProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, filter, loading, error, filterProduct };
};
