# SK. Cybernetic Portfolio Architect (Next.js 14, TypeScript, Framer Motion)

This repository contains a production-grade, portfolio website featuring a retro-futuristic, game-style theme with a custom "START GAME" interactive intro.

## 🧩 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** TailwindCSS (Cyberpunk/Neon theme)
* **Animation:** Framer Motion
* **Components:** Custom components (inspired by ShadCN UI structure)
* **Deployment:** Vercel

## ⚙️ Setup and Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/my-cyber-portfolio.git](https://github.com/your-username/my-cyber-portfolio.git)
    cd my-cyber-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Locally:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:3000`.

## 📌 Customization & Flowise Integration

### 1. **Flowise AI Assistant**

To fully integrate your Flowise app, you must update the following placeholder:

* **File:** `src/app/(dashboard)/flowise/page.tsx`
* **Variable to Update:**
    ```typescript
    const FLOWISE_EMBED_URL = '[https://your-flowise-deployed-link-here.com/embed](https://your-flowise-deployed-link-here.com/embed)';
    ```
    **Action:** Replace the placeholder URL with the actual embed URL provided by your deployed Flowise Chatflow.

### 2. **Content Update**

* **About Me:** Update content in `src/app/(dashboard)/page.tsx`.
* **Projects:** Update the `projectData` array in `src/app/(dashboard)/projects/page.tsx`.
* **Contact Info:** Update links/emails in `src/app/(dashboard)/contact/page.tsx`.
* **Logo:** The logo component is `src/components/Logo.tsx`. Update the `SK.` initials if needed.

## 🚀 Vercel Deployment

This project is optimized for deployment on Vercel, the platform recommended by Next.js.

1.  **Install Vercel CLI (Optional but recommended):**
    ```bash
    npm install -g vercel
    ```

2.  **Connect to Vercel:**
    ```bash
    vercel login
    ```

3.  **Deploy the Project:**
    ```bash
    vercel
    ```
    Follow the prompts. Vercel will automatically detect the Next.js framework and deploy your application. After the first deployment, you can simply run `vercel --prod` to deploy to the production environment.