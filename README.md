# Container Report Management System

Hệ thống quản lý báo cáo sửa chữa container rỗng (M&R) với giao diện hiện đại.

## Tính năng

- ✅ Giao diện hiện đại với màu xanh chủ đạo
- ✅ 2 tab: Tổng kết và Chi tiết
- ✅ Bảng dữ liệu responsive với Ant Design
- ✅ Bộ lọc đầy đủ chức năng
- ✅ Thêm cột số thứ tự (STT) cho tất cả các bảng
- ✅ Thiết kế gradient cho header và card

## Công nghệ sử dụng

- React 18
- Vite
- Ant Design 5
- Day.js

## Cài đặt

```bash
npm install
```

## Chạy ở local

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

## Build cho production

```bash
npm run build
```

## Deploy lên Vercel

### Cách 1: Deploy qua Vercel CLI

1. Cài đặt Vercel CLI (nếu chưa có):
```bash
npm install -g vercel
```

2. Login vào Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Deploy lên production:
```bash
vercel --prod
```

### Cách 2: Deploy qua Vercel Dashboard

1. Đăng nhập vào [Vercel Dashboard](https://vercel.com/dashboard)

2. Click nút "Add New" -> "Project"

3. Import Git Repository:
   - Kết nối với GitHub/GitLab/Bitbucket
   - Chọn repository của bạn

4. Configure Project:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Click "Deploy"

### Cách 3: Deploy trực tiếp từ folder

1. Cài đặt Vercel CLI:
```bash
npm install -g vercel
```

2. Di chuyển vào thư mục project:
```bash
cd container-report-app
```

3. Login và deploy:
```bash
vercel login
vercel
```

4. Làm theo hướng dẫn:
   - Set up and deploy? Yes
   - Which scope? Chọn account của bạn
   - Link to existing project? No
   - What's your project's name? container-report-app
   - In which directory is your code located? ./
   - Want to override the settings? No

5. Deploy lên production:
```bash
vercel --prod
```

## Cấu trúc thư mục

```
container-report-app/
├── src/
│   ├── App.jsx          # Component chính
│   ├── App.css          # Styles cho App
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel configuration
└── README.md            # Documentation
```

## Tính năng chính

### Tab Tổng kết
- Số lượng cont đã báo giá
- Số lượng cont đã sửa chữa
- Lỗi cảng giám định sau khi kiểm tra

### Tab Chi tiết
- Số lượng cont không cần sửa
- Số lượng cont chuyển hãng tàu
- Số lượng cont do cá nhân chu trách nhiệm
- Số lượng cont chỉnh lại giá và mục sửa

## Màu sắc

- Primary Blue: #1890ff
- Secondary Blue: #096dd9
- Header Blue: #0e499a
- Light Blue: #e6f7ff

## Responsive Design

Ứng dụng được thiết kế responsive và hoạt động tốt trên:
- Desktop (≥1200px)
- Tablet (768px - 1199px)
- Mobile (<768px)

## Hỗ trợ

Nếu bạn gặp vấn đề khi deploy, vui lòng kiểm tra:
- Node.js version ≥ 16
- npm version ≥ 8
- Vercel CLI đã được cài đặt đúng

## License

Copyright © 2025 CEH MNR
