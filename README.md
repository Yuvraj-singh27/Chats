# 💬 Chat Messages CRUD Application

A simple **Node.js web application** built using **Express** and **MongoDB** that allows users to perform full **CRUD (Create, Read, Update, Delete)** operations on chat messages through a clean web interface.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Templating Engine:** EJS (Embedded JavaScript)
* **Middleware:**

  * `method-override` – Enables PATCH and DELETE requests via HTML forms
  * `express.urlencoded` – Parses form data

---

## 📂 Project Structure

```
project-root/
│
├── index.js        # Main server file (routing & DB connection)
├── init.js         # Script to seed the database with sample chats
├── package.json    # Project dependencies and scripts
├── models/
│   └── chat.js     # Mongoose schema for chat messages
├── views/          # EJS templates
└── public/         # Static files (CSS, JS, etc.)
```

---

## 🚀 Installation & Setup

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Seed the Database (Optional)

Run this script **once** to populate MongoDB with 50 sample chat messages:

```bash
node init.js
```

### 3️⃣ Start the Server

```bash
node index.js
```

📍 The application will be available at:

```
http://localhost:8080
```

---

## 🔗 API Routes

| HTTP Method | Route             | Description                            |
| ----------- | ----------------- | -------------------------------------- |
| GET         | `/chats`          | Display all chat messages              |
| GET         | `/chats/new`      | Show form to create a new chat message |
| POST        | `/chats/new`      | Create a new chat message              |
| GET         | `/chats/:id/edit` | Show edit form for a specific chat     |
| PATCH       | `/chats/:id/edit` | Update an existing chat message        |
| DELETE      | `/chats/:id`      | Delete a chat message                  |

---

## 📌 Features

* Full CRUD functionality for chat messages
* Clean RESTful routing structure
* MongoDB integration using Mongoose
* Server-side rendering with EJS
* Form-based PATCH and DELETE support using method-override

---

## ✅ Use Case

This project is ideal for:

* Learning **Express + MongoDB CRUD operations**
* Understanding **RESTful routing**
* Practicing **MVC structure** in Node.js applications

---

✨ *A great beginner-friendly project to strengthen backend development concepts.*
