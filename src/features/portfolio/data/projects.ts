import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "institutional-data-portal",
    title: "Institutional Data Management Portal",
    period: {
      start: "02.2026",
      end: "04.2026", 
    },
    githubUrl: "https://github.com/HumanshuIse/internship_project",
    skills: [
  "React",
  "Vite",
  "Tailwind CSS",
  "React Hook Form",
  "React Router",
  "Recharts",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "JWT",
  "SheetJS",
  ],
    description: `A comprehensive, schema-driven digital portal designed to streamline, manage, and seamlessly export institutional research data.
- Engineered a centralized dynamic form engine utilizing JSON schemas and PostgreSQL JSONB columns for data integrity.
- Implemented a dual-state submission matrix (Draft vs. Submitted) with secure Role-Based Access Control (RBAC) using JWT.
- Developed automated Excel export pipelines using SheetJS to map nested JSONB data directly to strict institutional compliance headers.
- Built real-time admin dashboards with Recharts for global data visualization and impact metric tracking.`,
    images: ["/portal-1.png", "/portal-2.png", "/portal-3.png"], 
    isExpanded: true,
  },
  {
    id: "teamsketch",
    title: "TeamSketch - Real-Time Collaborative Whiteboard",
    period: {
      start: "12.2025",
      end: "03.2026"
    },
    githubUrl: "https://github.com/aditya726/TeamSketch", 
    skills: [
    "React",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Fabric.js",
    "Socket.IO",
    "Framer Motion",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Redis",
    "Passport.js",
    "JWT",
    "bcryptjs",
    "Swagger",
    ],
    description: `A real-time collaborative whiteboarding platform enabling teams to brainstorm, communicate, and work synchronously across shared rooms.

* Engineered an interactive collaborative canvas using Fabric.js and Socket.IO with real-time drawing synchronization across connected users.
* Implemented room-based collaboration with real-time text and voice communication, supported by dedicated Socket.IO services and Redis Pub/Sub.
* Developed secure authentication using JWT, bcrypt, Passport.js, and Google OAuth, with MongoDB/Mongoose for persistent user and room data.
* Built a responsive React + TypeScript frontend with Zustand state management, Tailwind CSS, and Framer Motion, backed by documented Express.js REST APIs with Swagger UI.`,
    images: ["/teamsketch-1.png", "/teamsketch-2.png", "/teamsketch-3.png", "/teamsketch-4.png", "/teamsketch-5.png"], 
    isExpanded: true,
  },
  {
    id: "coderiot",
    title: "CodeRiot - Real-Time Competitive Coding Platform",
    period: {
      start: "07.2025",
      end: "10.2025"
    },
    githubUrl: "https://github.com/HumanshuIse/CodeRiot",
    skills: [
  "React",
  "React Router",
  "Axios",
  "Tailwind CSS",
  "Monaco Editor",
  "FastAPI",
  "SQLAlchemy",
  "PostgreSQL",
  "Pydantic",
  "JWT",
  "OAuth2",
  "WebSockets",
  "Redis",
  "Ollama",
  "Docker",
  ],
    description: `A full-stack competitive coding platform enabling real-time head-to-head programming matches with AI-assisted learning and secure code execution.

* Engineered real-time matchmaking using Redis-backed queues and WebSockets, enabling live opponent pairing, match events, and persistent match-state recovery.
* Designed a decoupled FastAPI architecture with PostgreSQL and SQLAlchemy, separating core application services from a dedicated Judge Server for scalable code evaluation.
* Built a secure Docker-based execution engine to sandbox user-submitted Python and C++ code, execute test cases, and return outputs, errors, and timeout results.
* Integrated HintAI using Ollama to analyze submitted code and generate high-level contextual hints, alongside JWT authentication, Google OAuth2, and role-protected problem moderation.`,
    images: ["/coderiot-1.png", "/coderiot-2.png", "/coderiot-3.png", "/coderiot-4.png", "/coderiot-5.png"], 
    isExpanded: true,
  },
  {
    id: "strideup",
    title: "StrideUp - AI-Powered Fitness Assistant",
    period: {
      start: "07.2024",
      end: "10.2024"
    },
    githubUrl: "https://github.com/HumanshuIse",
    skills: [
      "Python",
      "Flask",
      "Machine Learning"
    ],
    description: `Developed a fitness recommendation system generating personalized diet and workout plans based on user input parameters such as age, BMI, and fitness goals.
- Implemented machine learning algorithms to classify user fitness levels and suggest suitable routines.
- Built backend logic using Flask to handle user data processing and recommendation workflows.`,
    images: ["/strideup-1.png"], 
    isExpanded: true,
  },
  {
    id: "vaultdrop",
    title: "VaultDrop - Secure File Sharing Platform",
    period: {
      start: "06.2025", // Adjust timeline as needed
      end: "07.2025"
    },
    githubUrl: "https://github.com/HumanshuIse/vaultdrop",
    skills: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    description: `A modern, secure, and user-friendly file sharing platform with a premium UI and robust admin features.
- Implemented bank-grade security with encrypted files, OTP protection via email, and auto-expiring links.
- Built an effortless sharing mechanism using simple access codes, requiring no recipient account creation.
- Developed an admin dashboard for user management, file tracking, and platform analytics.
- Designed a responsive, accessible interface with a robust dark/light mode toggle.`,
    images: ["/vaultdrop-1.png", "/vaultdrop-2.png"], // <-- Replace with your actual image paths
    isExpanded: true,
  }
]