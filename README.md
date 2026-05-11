# Abdul Khaliq Abdul Azeez - Portfolio Site

This is the central portfolio site for **Abdul Khaliq Abdul Azeez**, a Junior IT student at the New Jersey Institute of Technology pursuing a career in **Cloud Engineering**.

The portfolio showcases a range of projects focused on Linux administration, networking, automation, Infrastructure as Code (IaC), and secure systems work.

## 🚀 Projects Overview

- **Wealthwise AI Personal-Finance Advisor**: A full-stack Next.js/TypeScript application providing AI-driven financial guidance.
- **AI-Powered Terraform Architect & Validator**: A cloud infrastructure tool that generates, validates, and security-scans Terraform code before creating GitHub Pull Requests.
- **Raspberry Pi Music Server**: A home-lab project practiced in Linux administration and secure remote access via Tailscale.

## 🛠️ Built With

- **Framework**: [Next.js 15+](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: Configured for modern cloud platforms (Vercel/AWS/etc.)

## 📦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev -p 3001
   ```

3. **Open the site**:
   Navigate to [http://localhost:3001](http://localhost:3001) to view the portfolio.

## 🚢 GitHub Pages Deployment

This project deploys as a static Next.js export through GitHub Actions.

1. In GitHub, open **Settings → Pages** for the repository.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`, or run **Deploy Portfolio to GitHub Pages** manually from the Actions tab.

The workflow builds the site with a Project Pages base path:

```bash
NEXT_PUBLIC_BASE_PATH=/<repository-name>
NEXT_PUBLIC_SITE_URL=https://<github-username>.github.io/<repository-name>
```

For a local Pages-mode verification build:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio-site NEXT_PUBLIC_SITE_URL=https://example.github.io/portfolio-site npm run build:pages
```

If deployment fails, check the workflow logs first. Lint and build failures block publishing, and GitHub Pages must be configured to use **GitHub Actions** as the source.

## 📁 Repository Structure

- `src/data/profile.ts`: The central data file containing all project details, skills, and bio information.
- `src/components/`: Modular UI components for the various portfolio sections (Hero, Projects, Skills, etc.).
- `demo.sh`: A master script (located in this directory) to launch all major projects in the IS219 suite for demo purposes.

## 👨‍💻 About the Author

Junior IT student at NJIT (Expected May 2027), focused on building reliable infrastructure and secure automation workflows.

- **GitHub**: [AbdulKhaliqAbdulAzeez](https://github.com/AbdulKhaliqAbdulAzeez)
- **LinkedIn**: [Abdul Khaliq Azeez](https://linkedin.com/in/abdul-khaliq-azeez/)
- **Email**: [abdulkhailqabdulazeez@gmail.com](mailto:abdulkhailqabdulazeez@gmail.com)
