# Zak's Blueprint – Backend

This is the backend service for **Zak's Blueprint**, a full-stack developer portfolio built by Zak Hajjaji (aka @funkmafia aka ME!!). The backend handles form submissions and message storage securely and efficiently.

## 🎯 Purpose

To manage contact form submissions via secure email and database storage, supporting the frontend portfolio built in Next.js.

## 🔧 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Email**: Set up still in motion.
- **Other**: dotenv, CORS

## ✉️ Features

- Handles contact form POST requests
- Stores messages in a MongoDB database
- Configured for deployment on Render
- Supports CORS for frontend integration

## 📁 Folder Structure

```
/routes        # Contact form API routes
/controllers   # Logic for handling message requests
/models        # Mongoose schema for storing contact messages
/index.js      # App entry point
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/funkmafia/the-blueprint-backend.git
cd the-blueprint-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root directory

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> ⚠️ If using Gmail, generate an App Password from your Google account settings. Do not use your main password.

### 4. Run the development server

```bash
npm run dev
```

The server should be live at `http://localhost:5000` or whichever port is set in your `.env`.

## 🌐 Deployment

- Live on **Render**
- Connected to the frontend hosted on **Vercel**

## 🙌 Acknowledgements

Built with focus, intention, and creative flair - powered by the support of **The Developer Academy**.

---
