import { useEffect, useState } from "react";

const useDeliveries = () => {
  const [deliveries, setDeliveries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/deliveries")
      .then((res) => res.json())
      .then((data) => setDeliveries(data));
  }, []);

  return { deliveries };
};

export default useDeliveries;
