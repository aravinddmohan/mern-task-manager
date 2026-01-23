🚀 MERN Task Manager

A simple MERN stack task manager with authentication and CRUD functionality.
Built as part of a technical assessment to demonstrate backend + frontend integration.

✨ Features

User Registration & Login

JWT Authentication

Protected Routes

Create / Read / Update / Delete Tasks

Each task belongs to a user

MongoDB database

Clean and simple UI

🛠 Tech Stack

Frontend

React (Vite)

Axios

Backend

Node.js

Express.js

MongoDB

JWT Authentication

📁 Project Structure
mern-task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── api/
│   └── main.jsx
│
└── README.md

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/mern-task-manager.git
cd mern-task-manager

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔐 API Endpoints
Auth
Method	Route	Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user
Tasks
Method	Route	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🧪 Sample Test User
Email: arjun.dev@gmail.com
Password: Arjun@123

✅ Features Implemented

✔ JWT Authentication
✔ Protected Routes
✔ CRUD Operations
✔ MongoDB Integration
✔ Axios API Handling
✔ Clean Code Structure

📌 Notes

Passwords are hashed using bcrypt

JWT is stored in localStorage

Routes are protected using middleware

Designed for learning & assessment purposes

👨‍💻 Author

Your Name
MERN Stack Developer

⭐ Final Note

This project demonstrates:

Full-stack development

Authentication handling

REST API integration

Clean React structure
