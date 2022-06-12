import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItem = () => {
  const [item, setItem] = useState({});
  const { itemid } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/deliveries/${itemid}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return { item };
};

export default useItem;
