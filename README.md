# Mohammed — Computer Systems Engineering Portfolio

A sleek, high-performance portfolio website tailored for **BEng Computer Systems Engineering**. Built with modern HTML5, CSS3, and JavaScript featuring zero build steps, responsive design, sleek dark mode, and seamless GitHub Pages hosting.

---

## 🚀 Features

- **Sleek Tech Dark Mode**: Deep obsidian & slate backgrounds with glowing cyan/neon accents and smooth transitions.
- **Interactive Circuit Canvas**: Real-time connected node animation representing digital hardware & network circuits.
- **Dynamic Typewriter**: Highlights core skills (Embedded Systems, Firmware, RTOS, FPGA, IoT).
- **Interactive Project Filtering**: Filter projects seamlessly across *Embedded & Systems*, *Hardware & FPGA*, and *IoT & Software*.
- **Integrated Terminal Showcase**: Interactive JSON systems specification card.
- **Copy Email with Toast Notification**: Instant clipboard copying with feedback.
- **Light / Dark Mode Switcher**: Preserves user preference with `localStorage`.
- **Zero Build Dependencies**: Deploy instantly to GitHub Pages with standard Git.

---

## 🛠️ Step-by-Step GitHub Pages Deployment Guide

Follow these simple steps to publish your portfolio for free on **GitHub Pages**:

### Step 1: Create a GitHub Repository
1. Log into your [GitHub account](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Choose one of two naming options:
   - **Option A (Personal User Site):** Name the repository `<your-username>.github.io` (e.g., `mohammed.github.io`). This will be hosted at `https://<your-username>.github.io/`.
   - **Option B (Project Site):** Name it `portfolio` or anything you like. It will be hosted at `https://<your-username>.github.io/portfolio/`.
4. Keep the repository **Public**.
5. Do **not** initialize with a README, .gitignore, or license (we already have our files ready).
6. Click **Create repository**.

---

### Step 2: Push Your Code from Your Computer
Open PowerShell or your terminal in this directory:
`C:\Users\moham\.gemini\antigravity\scratch\portfolio`

Run the following commands:

```powershell
# 1. Initialize git (if not already done)
git init

# 2. Add all files and make initial commit
git add .
git commit -m "Initial commit: Computer Systems Engineering portfolio"

# 3. Rename branch to main
git branch -M main

# 4. Link to your GitHub repository (replace with YOUR repo URL from GitHub)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push your portfolio code
git push -u origin main
```

---

### Step 3: Turn on GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) -> **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 30–60 seconds, refresh the page, and GitHub will provide your live URL (e.g. `https://<your-username>.github.io/`).

---

## ✏️ Customization Checklist

Open `index.html` in your editor to personalize:

1. **Name & Tagline**:
   - Update `<title>` and `<h1>Mohammed</h1>`.
2. **Social & Contact Links**:
   - Replace `https://github.com` and `https://linkedin.com` with your actual profile links.
   - Replace `your.email@example.com` with your real email address.
3. **Projects**:
   - Update the `<article class="project-card">` entries with your specific coursework, capstone, or personal hardware/software projects.
4. **Resume**:
   - Place your resume PDF in this directory (e.g. `resume.pdf`) and update `href="resume.pdf"` in the hero resume button.
5. **Education**:
   - Update university name, graduation date, and specific modules.
