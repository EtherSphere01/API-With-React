const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartstring = JSON.stringify(cart);
  localStorage.setItem("cart", cartstring);
};

const addItemToLocalStorage = (item) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, item];
  saveCartToLocalStorage(newCart);
};

export {
  getCartFromLocalStorage as getStoredCart,
  addItemToLocalStorage as addStoredCart,
};
