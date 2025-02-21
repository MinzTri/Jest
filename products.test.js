const { addProduct, getProducts, clearProducts, products } = require('./products');

beforeAll(() => {
  console.log('🏁 Trước khi chạy tất cả test: Xóa danh sách sản phẩm');
  clearProducts();
});

beforeEach(() => {
  console.log('🔄 Trước mỗi test: Reset danh sách sản phẩm');
  clearProducts();
});

afterEach(() => {
  console.log('✅ Sau mỗi test: Kiểm tra danh sách sản phẩm');
});

afterAll(() => {
  console.log('🎉 Sau khi chạy xong tất cả test');
});

test('Thêm sản phẩm vào danh sách', () => {
  addProduct('Laptop', 1500);
  expect(getProducts()).toHaveLength(1);
});

test('Lấy danh sách sản phẩm', () => {
  addProduct('Phone', 800);
  addProduct('Tablet', 600);
  expect(getProducts()).toEqual([
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 600 }
  ]);
});
