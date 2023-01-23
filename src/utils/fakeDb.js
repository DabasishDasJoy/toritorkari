// use local storage to manage cart data
/* const addToDb = (id) => {
  const shoppingCart = getStoredCart();

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}; */

// Minimize the code
const addToDb = (id) => {
  const shoppingCart = getStoredCart();

  // if quantity available increase otherwise add 1 minimum

  if (shoppingCart[id]) {
    shoppingCart[id]++;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

/**
 * Get the stored cart
 * If quantity is true then reduce by one
 * If quantity is false remove the cart from storage
 * Upload the updated cart
 * */
const reduceQuantityFromDb = (id) => {
  const shoppingCart = getStoredCart();

  // reduce quantity
  if (shoppingCart[id]) {
    shoppingCart[id]--;
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
  if (shoppingCart[id] === 0) {
    removeFromDb(id);
  }
};

/* const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
}; */

const removeFromDb = (id) => {
  const shoppingCart = getStoredCart();

  // Check if the id is in the shopping cart then delete the id and upload the updated cart into storage
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

export {
  addToDb,
  removeFromDb,
  deleteShoppingCart,
  getStoredCart,
  reduceQuantityFromDb,
};
