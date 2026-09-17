import { GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EDUCATIONS: Experience[] = [
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "3",
        title: "Pune Institute of Computer Technology (PICT)",
        employmentPeriod: {
          start: "09.2023",
          end: "05.2027",
        },
        icon: <GraduationCapIcon />,
        description: `- Bachelor of Engineering in Computer Engineering.
- CGPA: 9.475/10 (up to Semester 6).
- Selected among the Top 75 participants in Code with Cisco 2026 from 25,000+ students; won the "Demo Dynamo" Award for Best Demo.
- Selected among the top 200 participants in Mastercard Code for Change Hackathon.
- Presented a research paper at ICEMTEC 2026 on a scalable competitive coding platform.
- Upcoming SDE-1 at Mastercard.`,
        skills: [
          "C++",
          "Python",
          "Java",
          "JavaScript",
          "Data Structures and Algorithms",
          "Object-Oriented Programming",
          "Computer and Network Security",
          "Operating Systems",
          "Database Management Systems",
          "Software Engineering",
          "Cloud Computing",
          "Distributed Systems",
          "Data Science",
          "Machine Learning",
          "Blockchain Technology",
          "Artificial Intelligence",
        ],
      },
      {
        id: "2",
        title: "Pratibha Junior College",
        employmentPeriod: {
          start: "05.2021",
          end: "07.2023",
        },
        icon: <GraduationCapIcon />,
        description: `- Higher Secondary Education (HSC — 12th).
- Percentage: 79.33% (Distinction).
- MHT CET: 99.46%ile.`,
        skills: [
          "Mathematics",
          "Physics",
          "Chemistry",
          "Computer Science",
        ],
      },
      {
        id: "1",
        title: "Amrita Vidyalayam, Pune",
        employmentPeriod: {
          start: "06.2009",
          end: "06.2021",
        },
        icon: <GraduationCapIcon />,
        description: `- Secondary Education (SSC — 10th).
- Percentage: 85.40% (Distinction).`,
        skills: [
          "Mathematics",
          "Science",
          "English",
        ],
      },
    ],
  },
]