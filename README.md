# Imagify: AI-Powered Text-to-Image Generator 🌟🖼️

Transform text prompts into stunning AI-generated images with a credit-based system. Built with the MERN stack.

**Live Demo:** [Live Link](https://ai-text-to-images-frontend.vercel.app/)

## 🚀 Features

- **AI Image Generation**  
  Create unique images from text prompts using stable diffusion models
- **Credit System**  
  Purchase credits via secure Stripe integration to generate images
- **High-Quality Downloads**  
  Download generated images in high resolution (PNG/JPEG)
- **Secure Authentication**  
  JWT-based user registration and login system
- **Responsive Design**  
  Mobile-friendly interface for seamless cross-device use

## 🛠️ Tech Stack

**MERN Core:**
- **MongoDB**: NoSQL database for storing user data and image metadata
- **Express.js**: Backend API development
- **React.js**: Frontend user interface with dynamic rendering
- **Node.js**: Server-side JavaScript runtime

**Key Integrations:**
- **Razorpay API**: Secure payment processing for credit purchases
- **CLIPDROP**: AI model integration for image generation
- **Use Context**: State management for complex UI interactions
- **Tailwind CSS**: Modern styling and responsive design

## 📦 Installation

1. Clone repository:
```bash
git clone https://github.com/AmanRaj073/Ai-Text-to-Images

Backend Setup:

bash
cd backend
npm install
npm run server

Frontend Setup:

bash
cd frontend
npm install
npm run dev 