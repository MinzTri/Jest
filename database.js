// File này giả lập logic của kết nối cơ sở dữ liệu

// Tạo đối tượng database (giả lập)
let db = {
    isConnected: false,
  };
  
  // Hàm kết nối database
  function connect() {
    db.isConnected = true;
    console.log('Kết nối database thành công!');
  }
  
  // Hàm ngắt kết nối database
  function disconnect() {
    db.isConnected = false;
    console.log('Ngắt kết nối database!');
  }
  
  // Export các hàm và trạng thái
  module.exports = { db, connect, disconnect };
  