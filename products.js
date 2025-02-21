let products = [];

function addProduct(name, price) {
  products.push({ name, price });
}

function getProducts() {
  return products;
}

function clearProducts() {
  products = []; // Xóa toàn bộ sản phẩm
}

module.exports = { addProduct, getProducts, clearProducts, products };
