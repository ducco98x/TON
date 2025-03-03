# Thiết lập dự án TON bằng Codespaces
Bước 1: Mở Github đăng nhập vào kho lưu trữ của bạn (https://github.com).
- Tạo một kho lưu trữ mới trong Github hoặc chọn một kho lưu trữ đã có.
- Sau khi vào dự án nhấn vào Code vào mở Codespaces để xây dựng dự án của bạn "Create codespace on main".
- Một tab mới mở ra với giao diện giống VS Code để build dự án.
Bước 2: Thiết lập môi trường phát triển TON trên Codespaces
- Cài đặt node.js và yarn với nội dung sau:
- * Mở terminal trong Codespace và chạy lệnh sau:
  * "curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    npm install -g yarn
- Kiểm tra cài đặt thành công chưa bằng lệnh sau:
  * "node -v"
  * "yarn -v"
    (nếu hiện phiên bản của phần mềm là đã thành công)
Bước 3: Cài đặt TON SDK (Là một công cụ Ton Cli để tương tác với TON Blockchain)
- * Chạy lệnh sau trong Terminal của Codespaces:
  * "npm install -g tondev"
  * "tondev init"
- * Chạy lệnh sau để cài đặt TON CLI và TON Solidity:
  * "tondev sol update"
  * "tondev tonos-cli update"
- * Kiểm tra các cài đặt bằng lệnh sau:
  * "tonos-cli --version
Bước 4: Khởi tạo dự án hợp đồng thông minh TON của bạn
- * Tạo một thư mục dự án mới bằng lệnh sau:
  * "mkdir my-ton-app && cd my-ton-app" (Thay my-ton-app bằng tên dự án của bạn)
- * Chạy lệnh sau để clone dự án mẫu:
  * "git clone https://github.com/ton-community/ton-contracts-template.git ."
  * "yarn install"
Bước 5: Bắt đầu viết hợp đồng thông minh của bạn (Ton blackchain được viết bằng ngôn ngữ FunC và Fift
- * Mở thư mục contracts/ và tạo một file mới, ví dụ: "storage.fc"
  * Biên soạn nội dung thư mục contracts/storage.fc :

  * () recv_external(slice in_msg) {
      int stored_value = in_msg~load_uint(32);
      stored_value.store();
    }
- * Biên dịch hợp đồng bằng lệnh sau:
  * "yarn build" // Sau khi biên dịch file .fif và .boc sẽ được tạo ra trong thư mục build/.
  * Bước 5: Triển khai hợp đồng lên mạng Testnet
  * // Tạo một ví TON với Tonkeeper và chuyển sang chế độ Testnet để gửi giao dịch
  * - * Sau đó chạy dòng lệnh sau:
      * "tondev singer add my-wallet" (Thay my-wallet bằng tên ví TON của bạn)
    - * Để nhận TON miễn phí : bạn có thể vào "TON faucet"
    - * Deploy hợp đồng bằng cách chạy lệnh:
      * "tondev contract deploy contracts/storage.fc --wallet my-wallet"
     
Như vậy là bạn đã hoàn thành dự án của mình trên TON Blockchain
Hãy truy cập vào TON Explorer để kiểm tra trạng thái hợp đồng của mình
