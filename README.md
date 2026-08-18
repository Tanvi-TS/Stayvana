# 🏠 Stayvana - Property Rental Platform

A modern, full-stack property rental platform built using Node.js, Express, MongoDB, and Cloudinary.

🔗 **Live Demo:** [Stayvana](https://stayvana.onrender.com/) <br>
📂 **Repository:** [GitHub](https://github.com/Tanvi-TS/Stayvana)

[Features](#-features) •
[Tech Stack](#️-tech-stack) •
[Installation](#-installation) •
[Project Structure](#-project-structure) •
[API Endpoints](#-api-endpoints) •
[Security](#-security-features) •
[Future Enhancements](#-future-enhancements)

---

# 📖 About

Stayvana is a full-stack property rental platform that enables users to discover, create, and manage property listings. It offers secure authentication, cloud-based image storage, review functionality, and ownership-based authorization to provide a smooth and secure user experience.

---

# ✨ Key Highlights

* 🎨 Responsive and modern UI
* 🔐 Secure authentication and authorization
* ☁️ Cloudinary-based image storage
* ⭐ Review and rating system
* 🛡️ Middleware-based route protection
* 📱 Mobile-friendly interface
* 🚀 Full CRUD functionality

---

# 🚀 Features

## 🔑 Authentication & Authorization

- ✅ User Signup and Login
- ✅ Logout functionality
- ✅ Session-based authentication
- ✅ Passport.js integration
- ✅ Protected routes
- ✅ Owner-only listing management
- ✅ Review author authorization

---

## 🏡 Property Listings

- ✅ Create listings
- ✅ View all listings
- ✅ Individual listing pages
- ✅ Update listings
- ✅ Delete listings
- ✅ Ownership-based access control
- ✅ Single image upload support

---

## ☁️ Image Management

- ✅ Multer integration
- ✅ Cloudinary storage
- ✅ Image replacement during updates
- ✅ Secure file uploads

---

## ⭐ Reviews & Ratings

- ✅ Add reviews
- ✅ Delete own reviews
- ✅ 5-star rating system
- ✅ User-attributed reviews
- ✅ Automatic cleanup of associated reviews when listings are deleted

---

## 🎨 User Interface

- ✅ Bootstrap 5.3.8
- ✅ Responsive layout
- ✅ Flash messages
- ✅ EJS templates with EJS-Mate layouts
- ✅ Font Awesome icons
- ✅ Plus Jakarta Sans typography

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Frontend

* EJS
* EJS-Mate
* Bootstrap 5
* Custom CSS
* Font Awesome

## Authentication & Security

* Passport.js
* Passport-Local
* Passport-Local-Mongoose
* Express-Session
* Joi Validation

## File Upload & Storage

* Multer
* Cloudinary
* Multer-Storage-Cloudinary

## Other Tools

* Method Override
* Connect Flash

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/Tanvi-TS/Stayvana.git
cd Stayvana
```

## Install Dependencies

```bash
npm install
```

## Create `.env`

```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

## Start Server

```bash
node app.js
```

Server runs on:

```text
http://localhost:8080
```

---

# 📁 Project Structure

```text
Stayvana/
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── navbar.css
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── .env
```

---

# 🚧 API Endpoints

## Authentication

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| GET    | `/signup` | Signup page       |
| POST   | `/signup` | Register user     |
| GET    | `/login`  | Login page        |
| POST   | `/login`  | Authenticate user |
| GET    | `/logout` | Logout user       |

---

## Listings

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/listings`     |
| POST   | `/listings`     |
| GET    | `/listings/new` |
| GET    | `/listings/:id` |
| PUT    | `/listings/:id` |
| DELETE | `/listings/:id` |

---

## Reviews

| Method | Endpoint                          |
| ------ | --------------------------------- |
| POST   | `/listings/:id/reviews`           |
| DELETE | `/listings/:id/reviews/:reviewId` |

---

# 🔒 Security Features

* Password hashing with Passport-Local-Mongoose
* Session-based authentication
* Joi input validation
* Protected routes
* Ownership verification middleware
* Review author verification middleware
* Custom error handling

---

# 🎯 Future Enhancements

* 🔍 Functional search system
* ❤️ Wishlist/Favorites
* 📍 Map integration with location services
* 📅 Booking management
* 💳 Payment gateway integration
* 📧 Email notifications
* 👤 User profile pages

---

# 👩‍💻 Author

**Tanvi Saxena**

- GitHub: [Tanvi-TS](https://github.com/Tanvi-TS)
  
---

# ❤️ Built With

* Node.js
* Express.js
* MongoDB
* Cloudinary
* Bootstrap 5

---

⭐ If you found this project helpful, consider giving it a star!
