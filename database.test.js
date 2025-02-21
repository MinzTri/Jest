const { db, connect, disconnect } = require('./database');

describe('Test database logic', () => {
  beforeAll(() => {
    console.log('Chạy tất cả các test');
    connect(); // Kết nối database
  });

  afterAll(() => {
    console.log('không chạy tất cả các test');
    disconnect(); // Ngắt kết nối database
  });

  test('Kiểm tra trạng thái sau khi kết nối', () => {
    expect(db.isConnected).toBeTruthy(); // Kết nối thành công
  });

  test('Kiểm tra trạng thái sau khi ngắt kết nối', () => {
    disconnect();
    expect(db.isConnected).toBeFalsy(); // Ngắt kết nối thành công
  });
});
