import {
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "mindstrix",
    companyName: "MindstriX",
    companyWebsite: "https://mindstrix.in",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Working on full-stack development projects.\n- Contributing to software engineering tasks in a remote environment.",
        skills: [
          "Full Stack Development",
          "React",
          "Node.js",
          "Remote Work",
          "Teamwork",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "pict-inhouse-internship",
    companyName: "Pune Institute of Computer Technology",
    companyWebsite: "https://pict.edu",
    positions: [
      {
        id: "1",
        title: "Technical Intern",
        employmentPeriod: {
          start: "02.2026",
          end: "04.2026",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Developed the Institutional Data Management Portal, a full-stack, schema-driven, role-based web platform for academic achievement digitization and analytics[cite: 2].
- Contributed to backend and system architecture using Node.js, Express.js, PostgreSQL, and React[cite: 2].
- Implemented secure RESTful APIs with JWT-based authentication and Role-Based Access Control (RBAC)[cite: 2].
- Designed scalable system components and a Dynamic Form Engine using JSON schemas[cite: 2].
- Implemented a hybrid database strategy leveraging PostgreSQL with JSONB for flexible data storage[cite: 2].
- Built features such as dual-state submission workflows (Draft & Submitted), real-time analytics dashboards, and automated Excel export pipelines[cite: 2].`,
        skills: [
          "React",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "JSONB",
          "JWT",
          "RBAC",
          "System Architecture",
        ],
      },
    ],
  },
]
