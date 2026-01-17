# Next.js Project Template

This is a modern, production-ready template for building scalable web applications using Next.js 16 (App Router) and Tailwind CSS 4. It is designed to be a solid starting point for future projects with a focus on performance, developer experience, and modern best practices.

## 🚀 Tech Stack & Setup

This template is built with the following core technologies:

| Tool | Version | Description |
|------|---------|-------------|
| **Next.js** | `16.1.2` | The React Framework for the Web (App Router). |
| **React** | `19.2.3` | The library for web and native user interfaces. |
| **TypeScript** | `^5` | Static type checking for better developer experience. |
| **Tailwind CSS** | `^4` | Utility-first CSS framework for rapid UI development. |
| **ESLint** | `^9` | Pluggable linting utility for JavaScript and JSX. |
| **React Icons** | `^5.5.0` | svg react icons of popular icon packs. |

## 🛠️ Getting Started

1.  **Create a new project:**
    Use the GitHub CLI to generate a new repository from this template:
    ```bash
    # Replace <new-project-name> with your desired project name
    # Replace <template-owner>/<template-repo> with the path to this template repository
    gh repo create <new-project-name> --template <template-owner>/<template-repo> --public --clone
    cd <new-project-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

-   `npm run dev`: Runs the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs ESLint to catch code issues.

## 📂 Project Structure

-   `/app`: Contains the application source code (App Router).
-   `/public`: Static assets like images and fonts.
-   `/shared`: Shared utilities and components.
