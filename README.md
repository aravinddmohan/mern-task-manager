# 🚀 MERN Task Manager

A full-stack **Task Management Application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project demonstrates authentication, authorization, and CRUD operations with clean frontend–backend integration.

---

## ✨ Features

- User Registration & Login  
- JWT-based Authentication  
- Protected Routes  
- Create, Read, Update, Delete (CRUD) Tasks  
- Tasks are user-specific  
- Secure password hashing  
- Clean and minimal UI  

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---


## 📁 Project Structure
mern-task-manager/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── api/
│ │ └── main.jsx
│ └── index.html
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/YOUR_USERNAME/mern-task-manager.git
cd mern-task-manager

2️⃣ Backend Setup
cd backend
npm install
Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5000

🔐 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user
Task Routes
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🧪 Sample Test Credentials
Email: aravind@test.com
Password: 123456

✅ Features Implemented

JWT Authentication

Secure Password Hashing

Protected Routes

Full CRUD Operations

MongoDB Integration

Axios for API Calls

Clean Project Structure

📌 Notes

JWT token is stored in localStorage

Passwords are encrypted using bcrypt

Routes are protected using middleware

Built for learning and assessment purposes

👨‍💻 Author

Aravind Mohan
MERN Stack Developer

⭐ Final Note

This project demonstrates:

Backend API development

Authentication & Authorization

Frontend–Backend integration

Clean and scalable project structure
