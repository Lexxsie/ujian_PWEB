# 💆‍♀️ Skincare Routine Management System

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8.x-777BB4?style=for-the-badge\&logo=php\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)

A modern web-based application to manage and track daily skincare routines efficiently.

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📸 Screenshots

<div align="center">

### Dashboard

![Dashboard](https://via.placeholder.com/900x450/3b82f6/ffffff?text=Skincare+Routine+Dashboard)

### Add Routine

![Add Routine](https://via.placeholder.com/900x450/60a5fa/ffffff?text=Add+Skincare+Routine)

### Routine List

![Routine List](https://via.placeholder.com/900x450/93c5fd/ffffff?text=Routine+List)

</div>

---

## ✨ Features

### 🧴 Skincare Routine Management

* ✅ Add new skincare routines
* ✅ Edit existing routines
* ✅ Delete routines
* ✅ View all routines in a clean list
* ✅ Track routine based on **step**, **time**, and **frequency**

### 🔍 Search & Filter

* ✅ Search routine by product name or notes
* ✅ Filter routines by:

  * Time (AM / PM)
  * Skincare step (Cleanser, Serum, etc.)

### 📊 Dashboard Statistics

* ✅ Total saved routines
* ✅ AM routine count
* ✅ PM routine count
* ✅ Most frequently used skincare step

### 🎨 UI/UX

* ✅ Modern minimalistic design
* ✅ Blue light color theme (skincare-friendly)
* ✅ Sidebar layout for better usability
* ✅ Responsive design (Desktop & Mobile)
* ✅ Card-based layout with shadow & border
* ✅ Clear visual hierarchy (Header – Body – Footer)

---

## 🚀 Quick Start

### Prerequisites

Make sure you have:

* **React.js** 18+
* **npm**
* **PHP** 8+
* **MySQL**
* **XAMPP** (for backend)

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/itsnisa/skincare-routine.git
cd ujian_PWEB
```

---

### 2️⃣ Frontend Setup (React + Vite)

```bash
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

### 3️⃣ Backend Setup (PHP + MySQL)

1. Move backend folder to:

```
htdocs/skincare_api
```

2. Create database:

```sql
CREATE DATABASE skincare_routine_db;
USE skincare_routine_db;
```

3. Import table:

```sql
CREATE TABLE routines (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(120) NOT NULL,
  step ENUM('Cleanser','Toner','Serum','Moisturizer','Sunscreen','Exfoliant','Mask','Other') NOT NULL DEFAULT 'Other',
  time_of_day ENUM('AM','PM') NOT NULL DEFAULT 'AM',
  frequency ENUM('Daily','2-3x/week','Weekly','As Needed') NOT NULL DEFAULT 'Daily',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. Update database connection in `config.php`:

```php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "skincare_routine_db";
```

Backend endpoint:

```
http://localhost/skincare_api/index.php
```

---

## 🏗️ Project Structure

```
skincare-routine/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── routineApi.js
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── RoutineList.jsx
|   |   ├── RoutineForm.jsx
│   │   └── StatCards.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| GET    | `/index.php`         | Get all routines |
| POST   | `/index.php`         | Add new routine  |
| PUT    | `/index.php?id={id}` | Update routine   |
| DELETE | `/index.php?id={id}` | Delete routine   |

---

## 🎨 Tech Stack

| Technology   | Purpose       |
| ------------ | ------------- |
| React        | Frontend UI   |
| Vite         | Build tool    |
| Tailwind CSS | Styling       |
| PHP          | Backend API   |
| MySQL        | Database      |
| Fetch API    | HTTP requests |

---

## 🧪 Scripts

| Command           | Description            |
| ----------------- | ---------------------- |
| `npm run dev`     | Run development server |
| `npm run build`   | Build for production   |
| `npm run preview` | Preview build          |

---

## 🐛 Troubleshooting

### Backend not connected?

* Pastikan XAMPP
* Cek URL API di `routineApi.js`
* Pastikan database sudah dibuat

### CORS Error?

Tambahkan di PHP:

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
```

---

## 📈 Future Improvements

* [ ] User authentication
* [ ] Daily routine completion tracking
* [ ] Reminder notification
* [ ] Dark mode
* [ ] Multi-user support
* [ ] Export routine (PDF)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

- **Annisa Ismidabilah**
- **Cristofori Niko Fedrik Sagala**
- **Muhammad Daffa ' Alfiannoor**

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with 💙 using React, Tailwind, PHP & MySQL

</div>

---

Kalau kamu mau:

* versi **bahasa Indonesia penuh**
* README **khusus laporan kampus**
* atau disesuaikan dengan **nama & NPM kamu**

bilang aja, aku rapikan ✨
