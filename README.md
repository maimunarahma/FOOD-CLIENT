# 🌍🍴 Community Food Sharing and Surplus Reduction Platform

## Overview

The **Community Food Sharing and Surplus Reduction Platform** is a dynamic web application designed to reduce food waste by enabling individuals and organizations to share excess food with those in need. This platform allows users to add, manage, and request food, providing an efficient and sustainable solution to surplus food distribution. The platform is built with modern technologies like React, Firebase, Node.js, and MongoDB.

## Key Features ✨

- **User Authentication 🔐**: Email/password-based authentication and social login via Google or GitHub.
- **CRUD Operations 📝**: Users can add, update, delete, and view food items.
- **Food Requests 🥘**: Users can request available food and manage their requests.
- **Private Routes 🔒**: Pages like "Add Food," "Manage My Foods," and "My Food Requests" are accessible only to logged-in users.
- **Responsive Design 📱💻**: The platform is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.
- **Sorting & Search 🔍**: Users can sort available foods by expiration date and search for specific food items.
- **JWT Authentication 🔑**: Secure private routes using JWT for user verification.
- **Firebase Integration 🔥**: Authentication keys are securely managed using environment variables.
- **MongoDB Integration 📦**: Food data is stored in MongoDB, ensuring efficient and reliable storage.

## Live Site 🌐

- [Visit Live Site](https://food-site-41172.web.app/)

## Technologies Used 🛠️

- **Frontend**:
  - React ⚛️
  - React Router 🔗
  - Firebase Authentication 🔥
  - Tailwind CSS 🎨
  - TanStack Query 🔄
  - Axios 🌐

- **Backend**:
  - Node.js 🚀
  - Express 💻
  - MongoDB 🗄️
  - JWT (JSON Web Token) for authentication 🔑

## Installation and Setup ⚡

### Prerequisites ⚙️

- Node.js (version 14 or higher) 🚀
- MongoDB (local setup or MongoDB Atlas account) 📦
- Firebase account (for authentication) 🔥

### Frontend 🖥️

1. Clone the client-side repository:
   ```bash
   git clone https://github.com/your-username/client-side-repo.git
   cd client-side-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

### Backend 💻

1. Clone the server-side repository:
   ```bash
   git clone https://github.com/your-username/server-side-repo.git
   cd server-side-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend:
   ```bash
   npm start
   ```

### Open the Application

- Visit `http://localhost:3000` in your browser.

---

Enjoy using **Community Food Sharing and Surplus Reduction Platform**! 🌱🍽️

