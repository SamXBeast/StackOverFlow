# **StackOverflow Clone**

This project replicates the basic functionality and UI of StackOverflow. Built with **React** and **Vite**, it features dynamic question fetching using the StackOverflow API, search functionality, filters, and a responsive design with **Tailwind CSS**.

---

## **Features**
- Fetch questions dynamically using the [StackExchange API](https://api.stackexchange.com/docs).
- Search functionality for finding StackOverflow questions.
- Filters for sorting questions by:
  - **Activity**
  - **Creation**
  - **Votes**
- Responsive design with a mobile-friendly layout.
- A logo that redirects to the homepage.
- Footer for additional branding or information.

---

## **Getting Started**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [Git](https://git-scm.com/)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/SamXBeast/StackOverFlow.git
2. Navigate to project directory:
   ```bash
   cd StackOverFlow
3. Install dependencies:
   ```bash
   npm install

## **Usage**

### **Development Mode**
To run the application in development mode:
1. Start the development server:
   ```bash
   npm run dev
2. Open your browser and navigate to: http://localhost:5173

### **Production**

1. Generate production build:
   ```bash
   npm run build

## **Technologies Used**
- Frontend: React, Vite, Tailwind CSS
- API: StackExchange API
- Deployment: Vercel

## **File Structure**
```csharp
StackOverFlow/
├── public/               # Public assets
├── src/
│   ├── assets/           # Images, logos, etc.
│   ├── components/       # Reusable components (Header, Footer, QuestionList, etc.)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   ├── styles.css        # Custom CSS (if any)
├── vite.config.js        # Vite configuration
├── package.json          # NPM scripts and dependencies
├── README.md             # Documentation

```

## **License**
This project is licensed under the MIT License.
