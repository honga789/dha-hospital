# DHA Hospital Management System

DHA Hospital Management System là một ứng dụng web giúp quản lý bệnh viện, bao gồm các chức năng quản lý người dùng, bệnh nhân, bác sĩ, thuốc, và lịch làm việc; cho phép người dùng (bệnh nhân) đặt lịch Online trước khi đến khám, xem lại kết quả khám vô cùng dễ dàng. Hệ thống cung cấp giao diện cho người quản trị để theo dõi và điều hành các hoạt động trong bệnh viện.

## Các Tính Năng Chính

- **Quản lý người dùng:** Thêm, sửa, xóa và tìm kiếm người dùng (Bệnh nhân, Bác sĩ, Quản lý).
- **Quản lý bệnh nhân:** Thêm, sửa, xóa và tìm kiếm bệnh nhân, bao gồm thông tin nhóm máu và dị ứng.
- **Quản lý bác sĩ:** Thêm, sửa, xóa và tìm kiếm bác sĩ, với thông tin về chức danh công việc và khoa.
- **Quản lý thuốc:** Quản lý các loại thuốc trong bệnh viện.
- **Lịch làm việc:** Quản lý lịch làm việc của bác sĩ, ca làm việc, và lịch trình khám chữa bệnh.
- **Tra cứu chuyên khoa khám phù hợp với AI:** Tích hợp API của ChatGPT vào việc gợi ý khoa khám bệnh dựa vào triệu chứng.

## Tính năng sử dụng

- **Bệnh nhân:** Đặt lịch khám, tái khám đơn giản; tra cứu thuốc dễ dàng; tra cứu khoa khám bệnh dựa vào triệu chứng với AI.
- **Bác sĩ:** Xem ca trực; xem trước lịch khám bệnh nhân đã đặt; tiến hành khám bệnh cho bệnh nhân.

## Công Nghệ Sử Dụng

- **Node.js** - Nền tảng chạy JavaScript trên server.
- **Express.js** - Framework web cho Node.js.
- **Sequelize** - ORM cho Node.js, giúp tương tác với cơ sở dữ liệu MySQL.
- **EJS** - Template engine để render các trang HTML động.
- **MySQL** - Cơ sở dữ liệu quản lý thông tin bệnh viện.
- **Bootstrap** - Thiết kế giao diện nhanh chóng.
- **CSS** - Làm đẹp giao diện người dùng.

## Cài Đặt

1. **Clone repository:**
    ```bash
    git clone https://github.com/honga789/dha-hospital/
    ```

2. **Cài đặt các phụ thuộc:**
    ```bash
    cd dha-hospital
    npm install
    ```

3. **Cấu hình cơ sở dữ liệu:**
    Tạo một cơ sở dữ liệu MySQL và cấu hình các tham số kết nối trong tệp `config/config.json`.

5. **Chạy ứng dụng:**
    ```bash
    npm start
    ```

    Ứng dụng sẽ chạy trên cổng 3000 mặc định (`http://localhost:3000`).

## Cấu Trúc Thư Mục
dha-hospital/
│
├── config/            # Cấu hình kết nối cơ sở dữ liệu và các cấu hình khác
├── controllers/       # Các controller xử lý logic nghiệp vụ
├── middlewares/       # Cấu hình MiddleWares cho Đăng nhập
├── models/            # Các mô hình dữ liệu sử dụng Sequelize
├── public/            # Các tài nguyên tĩnh (CSS, JS, ảnh)
├── routes/            # Các tệp định nghĩa route (API)
├── views/             # Các tệp EJS để render giao diện
├── node_modules/      # Thư mục chứa các package Node.js
├── app.js             # Tệp khởi tạo ứng dụng
├── .env               # File cấu hình biến môi trường
└── package.json       # Quản lý các phụ thuộc và scripts của dự án

## Các Route Chính

Dưới đây là danh sách các route trong hệ thống cùng với mô tả chức năng và quyền truy cập:

### 1. **/login**
   - **Phương thức:** `GET` và `POST`
   - **Chức năng:** Đăng nhập người dùng vào hệ thống.
   - **Không yêu cầu quyền truy cập.**

### 2. **/signup**
   - **Phương thức:** `GET` và `POST`
   - **Chức năng:** Đăng ký tài khoản người dùng mới.
   - **Không yêu cầu quyền truy cập.**

### 3. **/logout**
   - **Phương thức:** `GET`
   - **Chức năng:** Đăng xuất người dùng khỏi hệ thống.
   - **Không yêu cầu quyền truy cập.**

### 4. **/home**
   - **Phương thức:** `GET`
   - **Chức năng:** Trang chủ của hệ thống.
   - **Không yêu cầu quyền truy cập.**

### 5. **/userhome**
   - **Phương thức:** `GET`
   - **Chức năng:** Trang chủ dành cho người bệnh nhân.
   - **Quyền truy cập:** Chỉ dành cho người dùng có vai trò "Bệnh nhân" (Sử dụng middleware `authorizeRoles('Bệnh nhân')`).

### 6. **/doctor**
   - **Phương thức:** `GET`
   - **Chức năng:** Trang chủ dành cho bác sĩ.
   - **Quyền truy cập:** Chỉ dành cho người dùng có vai trò "Bác sĩ" (Sử dụng middleware `authorizeRoles('Bác sĩ')`).

### 7. **/admin**
   - **Phương thức:** `GET`
   - **Chức năng:** Trang quản trị dành cho quản lý hệ thống.
   - **Quyền truy cập:** Chỉ dành cho người dùng có vai trò "Quản lý" (Sử dụng middleware `authorizeRoles('Quản lý')`).

### 8. **/appointment**
   - **Phương thức:** `GET` và `POST`
   - **Chức năng:** Quản lý các cuộc hẹn của bệnh nhân.
   - **Quyền truy cập:** Chỉ dành cho người dùng có vai trò "Bệnh nhân" (Sử dụng middleware `authorizeRoles('Bệnh nhân')`).

### 9. **/view-result**
   - **Phương thức:** `GET`
   - **Chức năng:** Xem kết quả khám bệnh của bệnh nhân.
   - **Quyền truy cập:** Chỉ dành cho người dùng có vai trò "Bệnh nhân" (Sử dụng middleware `authorizeRoles('Bệnh nhân')`).

### 10. **/symptom-search**
   - **Phương thức:** `GET`
   - **Chức năng:** Tìm kiếm các triệu chứng bệnh.
   - **Không yêu cầu quyền truy cập.**

### 11. **/medicines**
   - **Phương thức:** `GET`
   - **Chức năng:** Quản lý thông tin về thuốc trong bệnh viện.
   - **Không yêu cầu quyền truy cập.**

### 12. **/**
   - **Phương thức:** `GET`
   - **Chức năng:** Trang chủ mặc định của hệ thống.
   - **Không yêu cầu quyền truy cập.**


## Phân Chia Công Việc

Dự án này được chia thành 3 phần cho 3 thành viên trong nhóm, mỗi thành viên sẽ chịu trách nhiệm phát triển một phần riêng biệt của hệ thống:

### 1. Nguyễn Hồng Anh: **Quản lý Người Dùng và Trang Admin**
   - **Chức năng:** 
     - Quản lý người dùng (Bệnh nhân, Bác sĩ, Quản lý).
     - Thêm, sửa, xóa và tìm kiếm bệnh nhân.
     - Xử lý thông tin nhóm máu và dị ứng của bệnh nhân.
     - Trang Admin.

### 2. Trần Ánh Duy: **Quản lý Lịch Làm Việc và Đặt lịch**
   - **Chức năng:** 
     - Quản lý bác sĩ (thêm, sửa, xóa bác sĩ).
     - Thiết lập và quản lý lịch làm việc của bác sĩ.
     - Quản lý thông tin về chức danh công việc và khoa của bác sĩ.
     - Đặt lịch khám.

### 3. Đậu Đức Hiếu: **Cấu trúc dự án, Quản lý thuốc và Khoa đặt lịch**
   - **Chức năng:**
     - Cấu trúc dự án MVC.
     - Quản lý thông tin về thuốc, bao gồm thêm, sửa, xóa thuốc.
     - Quản lý các khoa trong bệnh viện và kết nối với bác sĩ (khoa nào có bác sĩ nào).
     - Tích hợp ChatGPT API vào tra cứu khoa.


## Giấy Phép

[MIT](https://opensource.org/licenses/MIT).
