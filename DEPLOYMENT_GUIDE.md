# HƯỚNG DẪN DEPLOY LÊN VERCEL

## Chuẩn bị

### 1. Tạo tài khoản Vercel (nếu chưa có)
- Truy cập: https://vercel.com/signup
- Đăng ký bằng GitHub, GitLab, hoặc Bitbucket (khuyến nghị dùng GitHub)
- Xác nhận email

### 2. Cài đặt Node.js (nếu chưa có)
- Tải Node.js version 16 trở lên từ: https://nodejs.org/
- Kiểm tra version:
```bash
node --version
npm --version
```

## PHƯƠNG ÁN 1: Deploy qua GitHub (Khuyến nghị) ⭐

### Bước 1: Push code lên GitHub

1. Tạo repository mới trên GitHub:
   - Truy cập: https://github.com/new
   - Đặt tên repository: `container-report-app`
   - Chọn Public hoặc Private
   - Click "Create repository"

2. Push code lên GitHub:
```bash
cd container-report-app
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/container-report-app.git
git push -u origin main
```

### Bước 2: Deploy từ Vercel Dashboard

1. Đăng nhập vào Vercel: https://vercel.com/dashboard

2. Click "Add New" → "Project"

3. Import Git Repository:
   - Chọn repository `container-report-app`
   - Click "Import"

4. Configure Project:
   - **Framework Preset**: Vite (tự động detect)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click "Deploy"

6. Đợi 1-2 phút để build và deploy

7. Sau khi deploy thành công, bạn sẽ nhận được URL dạng:
   `https://container-report-app-xxxxx.vercel.app`

### Bước 3: Cập nhật code sau này

Mỗi khi bạn push code mới lên GitHub:
```bash
git add .
git commit -m "Update feature"
git push
```

Vercel sẽ tự động build và deploy lại!

---

## PHƯƠNG ÁN 2: Deploy qua Vercel CLI

### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

### Bước 2: Login vào Vercel

```bash
vercel login
```

Làm theo hướng dẫn để đăng nhập (mở browser và xác nhận)

### Bước 3: Deploy

1. Di chuyển vào thư mục project:
```bash
cd container-report-app
```

2. Deploy lần đầu:
```bash
vercel
```

Trả lời các câu hỏi:
- **Set up and deploy?** → Y (Yes)
- **Which scope?** → Chọn account của bạn
- **Link to existing project?** → N (No)
- **What's your project's name?** → container-report-app
- **In which directory is your code located?** → ./
- **Want to override the settings?** → N (No)

3. Deploy lên production:
```bash
vercel --prod
```

### Bước 4: Cập nhật code sau này

```bash
# Sau khi sửa code
vercel --prod
```

---

## PHƯƠNG ÁN 3: Deploy trực tiếp từ folder (Nhanh nhất)

### Bước 1: Cài đặt Vercel CLI (nếu chưa có)

```bash
npm install -g vercel
```

### Bước 2: Vào thư mục project và deploy

```bash
cd container-report-app
vercel login
vercel --prod
```

Lần đầu tiên sẽ hỏi một số câu hỏi, chọn như sau:
- Set up and deploy? **Yes**
- Which scope? Chọn account của bạn
- Link to existing project? **No**
- What's your project's name? **container-report-app**
- In which directory is your code located? **./** (nhấn Enter)
- Want to override the settings? **No**

---

## Kiểm tra deployment

### 1. Kiểm tra trạng thái
- Truy cập: https://vercel.com/dashboard
- Xem danh sách projects
- Click vào project để xem chi tiết

### 2. Xem logs
```bash
vercel logs
```

### 3. Mở website
```bash
vercel open
```

---

## Cấu hình Domain tùy chỉnh (Tùy chọn)

### 1. Từ Vercel Dashboard:
- Vào project → Settings → Domains
- Add domain của bạn
- Cấu hình DNS theo hướng dẫn

### 2. Hoặc qua CLI:
```bash
vercel domains add your-domain.com
```

---

## Các lệnh Vercel CLI hữu ích

```bash
# Deploy lên preview environment
vercel

# Deploy lên production
vercel --prod

# Xem danh sách deployments
vercel ls

# Xóa deployment
vercel rm [deployment-url]

# Xem logs
vercel logs [deployment-url]

# Mở project trên browser
vercel open

# Xem thông tin project
vercel inspect [deployment-url]

# Link project với GitHub
vercel link
```

---

## Xử lý lỗi thường gặp

### Lỗi 1: "Command not found: vercel"
**Giải pháp:**
```bash
npm install -g vercel
# Hoặc
npx vercel
```

### Lỗi 2: Build failed
**Kiểm tra:**
- File `package.json` có đầy đủ dependencies
- Chạy `npm install` trước khi deploy
- Kiểm tra version Node.js (cần ≥16)

### Lỗi 3: 404 khi reload trang
**Đã fix sẵn trong `vercel.json`:**
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Environment Variables (Nếu cần)

### 1. Qua Dashboard:
- Project → Settings → Environment Variables
- Add key-value pairs

### 2. Qua CLI:
```bash
vercel env add [name]
```

---

## Rollback về version cũ

### 1. Qua Dashboard:
- Vào Deployments
- Chọn deployment cũ
- Click "Promote to Production"

### 2. Qua CLI:
```bash
vercel rollback [deployment-url]
```

---

## Tips để deploy nhanh hơn

1. **Sử dụng .vercelignore** để exclude files không cần:
```
node_modules
.git
*.log
```

2. **Enable caching** trong `vercel.json`:
```json
{
  "github": {
    "silent": true
  }
}
```

3. **Sử dụng GitHub** để tự động deploy khi push code

---

## Hỗ trợ

- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Status: https://www.vercel-status.com/

## Liên hệ

Nếu bạn gặp vấn đề khi deploy, vui lòng:
1. Kiểm tra logs: `vercel logs`
2. Xem documentation: https://vercel.com/docs
3. Liên hệ support Vercel

---

**Chúc bạn deploy thành công! 🚀**

Version 1.0.0 - Copyright © 2025 CEH MNR
