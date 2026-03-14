# 📚 LESSON 01 - KEY TAKE NOTE - DAY 27/02/2026 
> ghi chú những gì đã học được ở Day 1 ở đây

## Các giai đoạn của chương trình học

Bao gồm 5 giai đoạn - mục tiêu:

- Khởi động -> Setup máy
- Chậm mà chắc -> Kiến thức nền tảng (buổi 1 -> 4)
- Vượt chướng ngại vật -> Kiến thức Automation (buổi 5 -> 9)
- Tăng tốc -> Tối ưu code (buổi 10 -> 13)
- Về đích -> Setup project, CI/CD (buổi 14 -> 15)

## Tinh thần học

> Học như thế nào cho **Hiệu Quả**???

Thông qua 3 tiêu chí:
- **Học chủ động:** 
    - Chủ động ghi nhớ kiến thức
    - Khi gặp vấn đề, research thông qua Google và AI tools. Tìm sự trợ giúp từ mentor
    - Tự tìm hiểu thêm và mở rộng kiến thức
- **Học chăm chỉ:**
    - Làm bài tập đầy đủ trước buổi học
    - Thực hành liên tục
        - Củng cố lý thuyết
        - Phát triển tư duy
    - Thực hành gặp lỗi -> thông qua đó bổ sung thêm kinh nghiệm
- **Học thông minh:**
    - Luôn hệ thống lại kiến thức đã học trước khi làm bài tập
    - Tư duy hệ thống giúp nhớ bài lâu và hiểu bài sâu hơn
    - Không sử dụng AI

## WHAT - PLAYWRIGHT LÀ GÌ?

- Là 1 framework, tiền thân của nó là Puppeteer được tài trợ và phát triển bởi Microsoft

- Ra đời 31/01/2020

- Latest version: v1.58.2

### Ưu điểm
- **Cross Browser**
    - Support các browser phổ biến như Chrome, Firefox, Safari, Edge
    - Hỗ trợ lên tới 143 phiên bản trình duyệt

- **Cross Platform**
    - Code 1 lần, chạy trên các hệ điều hành phổ biến: Win, MacOS, Linux

- **Tính năng xịn xò**
    - auto waiting
    - auto-retry assertion

    => giúp giảm flaky test

- **Report đầy đủ thông tin**
    - Pass/Fail ở loại trình duyệt nào
    - Chi tiết thời điểm bị lỗi chuyện gì đang xảy ra
        - Ví dụ: gọi api nào, response trả về cái gì, ứng với line code nào

- **Code Gen**

### WHY - Tại sao chọn học Playwright - TypeScript

Học Playwright vì
- Dễ cài đặt
- Cú pháp đơn giản, dễ học
- Framework trending

Học TypeScript vì
- Flexible và đơn giản hơn
- Dễ dàng cài đặt hơn so với Java
Note: TypeScript = JavaScript + Strong Type

## Giải Thích Các Công Cụ Đã Cài Trước Buổi Học Này

### NVM - Node Version Management

#### WHAT - NVM là gì?

Là công cụ quản lý các phiên bản NodeJS -> phục vụ việc chuyển đổi version trong lúc code

- Lệnh check version của nvm trên máy:

```
nvm --version
```

**NodeJS** là công cụ để chạy code
- Có 2 cách để cài NodeJS
    - Cài thông qua NVM
    - Cài trực tiếp NodeJS vào máy

> Tại sao nên chọn cài đặt thông qua NVM?

Dễ chuyển đổi qua lại giữa các phiên bản NodeJS khác nhau khi làm nhiều project khác nhau trên 1 máy

Dùng lệnh này:

```nvm use <version>```

## GIT & GITHUB

- Git: quản lý sourc code
- GitHub: chia sẽ code, làm việc nhóm

### Config Git
Cấu hình mặc định:
```
git config --global user.name "<name>" //tên người dùng
git config --global user.email "<email>" //email người dùng
git config --global init.defaultBranch main // nhánh mặc định
```

### ⭐️ HOW - Kết nối với GitHub 

2 Steps:
- Tạo SSH key
- add SSH key vào GitHub Setting

#### WHAT - SSH Key là gì?

Là 1 giao thức đặc biệt giúp Local Computer (Git) communicate với GitHub

**SSH Key:**
- Bao gồm 2 cặp khoá:
    - 1 khoá ___Private___ -> bắt đầu bằng ```id_rsa``` (secret)
    - 1 khoá ___Public___ -> bắt đầu bằng ```id_rsa.pub``` (can share)
=> Giúp xác thực đăng nhập đơn giản hơn
- Lưu trữ ở ```~./ssh``` -> ```~``` đại diện cho HOME

```
    [Local Computer] ---------- Xác thực -----------> [GitHub]
(nơi store code cá nhân)                          (nơi store code chung)
           |                                              |
     private key                                     public key
     public key
```

#### HOW - Cách tạo SSH Key?

Lệnh tạo SSH Key:
```
ssh - keygen -t rsa -b 4096 -C "your_email@example.com"
```
Trong đó:
- ```keygen```: dùng tool keygen
- ```rsa```: thuật toán rsa
- ```4096```: size của key

Nếu dùng máy công ty đã có sẵn SSH Key thì không replace, chỉ add mới khi chưa có

#### HOW - Thêm SSH Key vào GitHub

Lấy nội dung SSH Key:
```
cat ~/.ssh/id_rsa_pub
```

Vào GitHub - Setting và thêm SSH Key vào

## Cài Đặt Playwright - Chạy Test đầu tiên

- Khởi tạo 1 thư mục
- Mở terminal -> chạy lệnh ```npm init playwright@latest```
- Enter cho tới khi hoàn tất

## Đưa Code Lên GitHub

Làm 1 lần duy nhất ban đầu:
- ```git init```: Khởi tạo repo local
- ```git remote and origin <url>```: Tạo repi GitHub và liên kết tới repo local

Làm mỗi khi có thay đổi:
- ```git add .```: Thêm toàn bộ file vào staging
- ```git commit -m "<message>"```: Commit file
- ```git push origin main```: Push code

## GitHub - Invite Collaborator

> Invite để mentor chấm bài

Truy cập vào Repo setting -> Access -> chọn Add collaborator




