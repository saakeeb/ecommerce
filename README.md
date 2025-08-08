# MERN E-Commerce Platform

A **full-stack MERN e-commerce application** with product lists, purchase, checkout, 

---

## 🚀 Features

### **Frontend**
- Built with **React** (Create React App)
- **Redux Toolkit** for state management
- **React Router** for page navigation
- **Bootstrap** and **Reactstrap** for responsive UI
- Product carousels with **react-material-ui-carousel**
- API calls via **Axios**

### **Backend**
- **Node.js** + **Express** REST API
- **MongoDB** with **Mongoose** ODM
- **JWT Authentication** with bcryptjs password hashing
- **express-validator** for input validation
- **express-fileupload** + **Cloudinary** for media storage

### **Integrations**
- **Stripe** & **Paytm** payment gateways
- **SendGrid** for transactional emails

---

## 🛠️ Tech Stack

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | React, Redux Toolkit, React Router, Bootstrap, Reactstrap |
| **Backend** | Node.js, Express, Mongoose |
| **Database** | MongoDB |
| **Auth** | JWT, bcryptjs |
| **Payments** | Stripe, Paytm |
| **Media Storage** | Cloudinary |
| **Email** | SendGrid |

---

## 📦 Installation & Setup

### **Prerequisites**
Make sure you have installed:
- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### **1. Clone the Repository**
```bash
git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
cd ecommerce
⚠️ This is a private repository — you’ll need access permissions.

2. Install Dependencies
Using yarn:
bash
Copy
Edit
yarn install
3. Configure Environment Variables
Create a .env file in the project root:

plaintext
Copy
Edit
# MongoDB
MONGO_URI=mongodb://localhost:27017/ecommerce

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=5d

# Stripe
STRIPE_API_KEY=sk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# SendGrid
SENDGRID_API_KEY=SG.your_sendgrid_api_key
4. Run the Application
bash
Copy
Edit
npm start
This runs both frontend & backend concurrently.

Backend API: http://localhost:5000

Frontend: http://localhost:3000

📂 Project Structure
bash
Copy
Edit
ecommerce/
│
├── api/               # Backend (Express, MongoDB, APIs)
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   └── server.js      # Entry point
│
├── client/            # Frontend (React)
│   ├── src/           # React components, Redux store
│   └── public/        # Static assets
│
├── .env               # Environment variables
├── package.json
└── README.md
