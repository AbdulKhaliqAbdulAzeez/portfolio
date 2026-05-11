# Design: Resume Content System

## Data File

Create central typed data files:

- src/types/profile.ts
- src/data/profile.ts

Suggested structure:

export const profile = {
  name: "Abdul Khaliq Abdul Azeez",
  title: "IT Student | Linux & Systems Support | Home Lab Enthusiast",
  location: "Jersey City, NJ",
  email: "abdulkhailqabdulazeez@gmail.com",
  github: "https://github.com/AbdulKhaliqAbdulAzeez",
  linkedin: "https://linkedin.com/in/abdul-khaliq-azeez/",
  summary: "...",
  education: [...],
  certifications: [...],
  skills: {...},
  projects: [...]
}

## Why

Keeping content in one file makes it easier for an AI agent or future developer to update the portfolio without hunting through every component.
