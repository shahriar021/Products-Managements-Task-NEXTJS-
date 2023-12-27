const getDataFromAPI = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error("some went wrong..chcek");
  }
  return res.json();
};

const getSelectedProduct = async (id) => {
  const item = await getDataFromAPI();
  const selectedProduct = await item.find((product) => product.id === id);
  return selectedProduct;
};

export { getDataFromAPI, getSelectedProduct };
