# 📚 Bookstore App

A **MERN stack** application to manage books.  
Users can view, add, edit, and delete books stored in a MongoDB database.

<img width="1919" height="1011" alt="Screenshot 2025-08-08 135307" src="https://github.com/user-attachments/assets/adfc6733-a573-4ae7-95a0-328553c5c8ee" />
---

## 🚀 Features
- 📖 View a list of books
- ➕ Add a new book
- ✏️ Edit book details
- ❌ Delete books   

- 📱 Fully responsive design

---

## 🛠️ Tech Stack
**Frontend:** React, Tailwind CSS, React Router, Axios  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**UI Icons:** React Icons  
**Build Tool:** Vite

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/joelscaria123/Simple-BookStore-App.git
cd Simple-BookStore-App
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
```

**(Optional)** Seed the database with sample books:
```bash
node seedBooks.js
```

Start the backend server:
```bash
npm run dev
```
Backend runs at: **http://localhost:5001**

---

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```
Frontend runs at: **http://localhost:5173**

---

## 📂 Project Structure
```
bookstore-app/
│
├── backend/        # Express & MongoDB API
├── frontend/       # React client app
├── README.md
├── package.json
└── .gitignore
```

---

## 🧑‍💻 Development Notes
- Ensure MongoDB is running locally or use MongoDB Atlas.
- Update the `MONGODB_URI` in `.env` with your connection string.
- The backend runs on port **5001** (changeable in `.env`).
- API base URL in the frontend may need updating if backend URL changes.

---

## 📜 License
This project is licensed under the **MIT License**.
