import type { Profile } from "@/types/profile";
import { withBasePath } from "@/lib/paths";

export const profile: Profile = {
  name: "Abdul Khaliq Abdul Azeez",
  title: "Junior IT Student Pursuing Cloud Engineering",
  professionalIdentity:
    "I am a junior Information Technology student building toward cloud engineering through Linux administration, networking, automation, infrastructure as code, and security-minded systems work.",
  targetWorkStatement:
    "I am looking for cloud engineering, infrastructure, IT support, and DevOps-adjacent internship opportunities where I can work with Linux systems, cloud platforms, automation, and infrastructure tooling.",
  targetAudience:
    "This portfolio is written for internship recruiters, cloud infrastructure teams, technical instructors, and reviewers who want to see practical project decisions instead of only a list of tools.",
  visualDirection:
    "The site uses a dark cloud-infrastructure palette because the work is systems-focused, but the layout stays clean and recruiter-friendly so the projects, decisions, GitHub work, and LinkedIn profile are easy to find.",
  location: "Jersey City, NJ",
  email: "abdulkhailqabdulazeez@gmail.com",
  github: "https://github.com/AbdulKhaliqAbdulAzeez",
  linkedin: "https://linkedin.com/in/abdul-khaliq-azeez/",
  resume: withBasePath("/resume.pdf"),
  summary:
    "My current path connects cloud engineering fundamentals with practical projects: Linux services, private networking, Next.js applications, AI-backed API routes, Terraform validation, security scanning, and GitHub-based review workflows.",
  headlineBullets: [
    "Cloud engineering direction with hands-on Linux and infrastructure practice",
    "Projects focused on reliable systems, validation, and clear technical decisions",
    "Interested in internships that combine cloud, automation, support, and DevOps foundations",
  ],
  cloudFocus: [
    "Cloud infrastructure fundamentals",
    "Linux administration",
    "Networking and secure access",
    "Infrastructure as Code",
    "Automation and validation",
    "GitHub-based delivery workflows",
  ],
  contactLinks: [
    {
      label: "GitHub",
      href: "https://github.com/AbdulKhaliqAbdulAzeez",
      type: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/abdul-khaliq-azeez/",
      type: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:abdulkhailqabdulazeez@gmail.com",
      type: "email",
    },
  ],
  education: {
    school: "New Jersey Institute of Technology",
    degree: "B.S. in Information Technology",
    expectedGraduation: "May 2027",
    coursework: [
      "Intro to Networking Technology",
      "Information Design Techniques",
      "Internet Applications",
    ],
  },
  certifications: [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Expected 2026",
    },
    {
      name: "IBM Data Engineering Professional Certification",
      issuer: "IBM",
      date: "2025",
    },
    {
      name: "Google Data Analytics Professional Certification",
      issuer: "Google",
      date: "2024",
    },
  ],
  skills: {
    "Cloud & Infrastructure": [
      "AWS fundamentals",
      "Cloud engineering concepts",
      "Deployment workflows",
      "GitOps concepts",
      "Service reliability",
    ],
    "Infrastructure as Code": [
      "Terraform",
      "Terraform validation",
      "Checkov security scanning",
      "Pull request review workflows",
      "Configuration review",
    ],
    "Linux & Networking": [
      "Linux administration",
      "SSH administration",
      "DNS basics",
      "Private networking",
      "Nginx reverse proxy concepts",
    ],
    "Automation & Scripting": [
      "Python",
      "Bash basics",
      "GitHub API",
      "Service automation",
      "Validation scripts",
    ],
    "Web & Application Tools": [
      "Next.js",
      "React",
      "TypeScript",
      "API routes",
      "Testing basics",
    ],
    Interests: [
      "Cloud engineering",
      "DevOps foundations",
      "Infrastructure security",
      "Monitoring",
      "Reliable systems",
    ],
  },
  projects: [
    {
      name: "Wealthwise AI Personal-Finance Advisor",
      category: "revised-midterm",
      courseLabel: "Revised Midterm Project",
      description:
        "A revised full-stack AI application that gives students and early-career professionals clearer budgeting, debt payoff, milestone, and projection guidance.",
      cloudRelevance:
        "This project supports my cloud engineering path because it shows that I can organize a deployed web application, work with API routes, protect environment-backed AI services, add fallback behavior, and think through reliability for user-facing workflows.",
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Google Gemini",
        "Recharts",
        "Vitest",
      ],
      problem:
        "Students and early-career professionals often need a clearer way to understand budgets, debt payoff, milestones, and long-term net-worth tradeoffs.",
      built:
        "I built a Next.js App Router application with a branching chat intake, AI advisor flow, live lookup API routes, dashboards, Monte Carlo confidence bands, JSON plan export, and visual QA tooling.",
      decisions: [
        "Kept Gemini API access behind server-side API routes instead of exposing credentials in the browser.",
        "Used fallback responses when an AI key is unavailable so the project still demonstrates the workflow.",
        "Added tests and visual QA checks to make the revised project more reliable than a static demo.",
        "Organized the experience around a user planning flow instead of disconnected feature screens.",
      ],
      security: [
        "Kept Gemini API access behind server-side API routes",
        "Used fallback responses when the AI key is unavailable",
        "Stored user data client-side instead of persisting it on a server",
        "Added API route tests and Lighthouse checks for quality gates",
      ],
      learned:
        "I learned how to combine AI-assisted guidance, route-level APIs, projection logic, dashboard UX, and automated testing into a more complete application.",
      status: {
        project: "revised-midterm",
        framework: "nextjs-app-router",
        ai: "gemini-backed",
        qa: "tests-and-visual-checks",
      },
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AbdulKhaliqAbdulAzeez/financial_advisor",
          type: "github",
        },
      ],
    },
    {
      name: "AI-Powered Terraform Architect & Validator",
      category: "job-technology",
      courseLabel: "New Job Technology Project",
      description:
        "A cloud infrastructure project focused on Terraform generation, validation, security scanning, and GitOps-style review.",
      cloudRelevance:
        "This project connects directly to cloud engineering because it uses infrastructure as code, validation workflows, security scanning, and pull-request based review before infrastructure changes are trusted.",
      tools: [
        "Next.js",
        "Python",
        "Terraform",
        "Checkov",
        "Google Gemini",
        "GitHub API",
      ],
      problem:
        "Infrastructure code generated by AI needs guardrails before it is trusted, reviewed, or promoted toward deployment.",
      built:
        "I built a Next.js frontend backed by a Python API that generates Terraform with Gemini, runs local formatting and validation, checks security findings with Checkov, and creates review branches and pull requests after validation passes.",
      decisions: [
        "Kept the workflow validation-only with no automatic terraform apply or destroy step.",
        "Blocked GitOps readiness when Checkov reports security findings.",
        "Kept GitHub token configuration server-side.",
        "Created pull requests for human review instead of deploying infrastructure directly.",
      ],
      security: [
        "Kept the workflow validation-only with no terraform apply or destroy step",
        "Blocked GitOps readiness when Checkov reports security findings",
        "Kept GitHub token configuration server-side",
        "Created pull requests for human review instead of deploying directly",
      ],
      learned:
        "I learned how to build safer AI infrastructure tooling by separating generation, formatting, validation, security scanning, and GitOps review into explicit stages.",
      status: {
        project: "job-technology",
        iac: "terraform",
        validation: "terraform-and-checkov",
        delivery: "github-pr-review",
      },
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AbdulKhaliqAbdulAzeez/securityProject",
          type: "github",
        },
      ],
    },
    {
      name: "Raspberry Pi Music Server",
      category: "supporting",
      courseLabel: "Supporting Home Lab Project",
      description:
        "A self-hosted music streaming service used to practice Linux administration, private networking, remote access, and service reliability.",
      cloudRelevance:
        "This project helped me practice infrastructure fundamentals that transfer to cloud work: remote Linux administration, secure access, service uptime, and network troubleshooting.",
      tools: ["Navidrome", "Tailscale", "Linux", "SSH", "Raspberry Pi"],
      problem:
        "I wanted centralized access to a personal music library without exposing a home server directly to the public internet.",
      built:
        "I configured Navidrome on a Raspberry Pi, managed the host through Linux and remote SSH, and used Tailscale so approved devices could stream music securely from anywhere.",
      decisions: [
        "Used Tailscale private networking rather than opening public ports.",
        "Kept the service small and maintainable for a home lab environment.",
        "Focused on remote administration habits that also matter in cloud environments.",
      ],
      security: [
        "Kept public ports closed",
        "Used Tailscale for private network access",
        "Administered the server remotely over SSH",
        "Limited access to trusted devices",
      ],
      learned:
        "I learned how to run a reliable self-hosted service, separate private access from public exposure, and troubleshoot network reachability from remote devices.",
      status: {
        service: "navidrome",
        status: "running",
        access: "tailscale-only",
        security: "no-public-ports",
      },
      links: [
        {
          label: "Documentation",
          href: "https://www.navidrome.org/docs/",
          type: "docs",
        },
      ],
    },
  ],
};
