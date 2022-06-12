import { addToDb } from "../utilities/fakedb";
import useCart from "./usecart";
import useDeliveries from "./useDeliveries";

const useCartHandle = () => {
  const { deliveries } = useDeliveries();
  const [cart, setCart] = useCart(deliveries);
  const handleAddToCart = (product) => {
    const exists = cart.find((p) => p._id === product._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((p) => p._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    // save to local storage (for now)
    addToDb(product._id);
    alert("Added To the cart");
  };
  ///////
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  /////////
  return {
    cart,
    setCart,
    handleAddToCart,
    total,
    tax,
    shipping,
    grandTotal,
    totalQuantity,
  };
};

export default useCartHandle;
