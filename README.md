# The Blueprint – Backend API

This is the backend service for **The Blueprint** portfolio site. It handles contact form submissions by:

- Sending email notifications via **Nodemailer**
- Storing messages in **MongoDB**

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemailer
- dotenv + CORS

## 🧠 Author

Built with focus, vision, and strong coffee ☕
By @funkmafia

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/funkmafia/the-blueprint-backend.git
cd the-blueprint-backend

### 2. Install dependencies

npm install

### 3. Create a .env file in the root directory

Add the following environemtn variables accordingly:

PORT=5000
MONGODB_URI=your_mongo_connection_string
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_gmail_app_password

⚠️ Note: If using Gmail, you must create an App Password — do not use your real Gmail password.

### 4. Run the development server

npm run dev or npm start - now the backend will now be running at http://localhost:5000 (alternatively 3000 subject to your port value)
