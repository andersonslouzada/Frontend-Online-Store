export async function getCategories() {
  const apiMLB = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(apiMLB);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(idCategoria, variavel) {
  const listaCategoriaApi = `https://api.mercadolibre.com/sites/MLB/search?category=${idCategoria}&q=${variavel}`;
  const response = await fetch(listaCategoriaApi);
  const data = await response.json();
  return data;
}

export async function getProductById() {
  const apiMLB = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const response = await fetch(apiMLB);
  const data = await response.json();
  return data;
}
