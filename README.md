# Motion - Your Real-time Collaborative Workspace

Motion is a full-stack Notion clone meticulously crafted to provide a seamless and collaborative note-taking experience. Built with cutting-edge technologies like **Next.js**, **Convex**, and **Clerk**, Motion offers real-time updates, a responsive and visually appealing interface powered by **Tailwind CSS** and **Shadcn UI**, and a rich set of features to organize your thoughts and ideas effectively.

## ✨ Key Features

* **Real-time Collaboration:** Experience simultaneous editing and instant preview updates, allowing for seamless teamwork.
* **Rich Text Editor:** Format your notes with a comprehensive set of tools, including:
    * Headings
    * Tables
    * Bulleted and numbered lists
    * Checkboxes
    * File uploads (powered by Edge Store)
    * Image embedding
    * And much more!
* **Note Chaining with Child Notes:** Organize complex ideas by creating hierarchical note structures with parent and child relationships.
* **Dark/Light Theme:** Enjoy a comfortable viewing experience with a toggleable dark and light theme.
* **Secure Authentication:** Robust user authentication powered by **Clerk** with OAuth support.
* **Efficient Storage:** Utilize **Convex** for efficient data storage and retrieval.
* **Static File Storage:** Store and manage static files seamlessly using **Edge Store**.
* **Archiving and Permanent Deletion:** Organize your workspace by archiving notes and permanently deleting them when no longer needed.
* **Responsive Design:** Enjoy a consistent and intuitive experience across various devices, thanks to **Tailwind CSS**.
* **Visually Appealing UI:** A modern and elegant user interface built with **Shadcn UI**.

## 🛠️ Technologies Used

* **Next.js:** A powerful React framework for building performant and scalable web applications.
* **Convex:** A reactive backend platform for real-time data and serverless functions.
* **Clerk:** A complete authentication and user management platform with OAuth support.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Shadcn UI:** A collection of beautifully designed and accessible UI components built with Radix UI and Tailwind CSS.
* **Edge Store:** A globally distributed storage service optimized for low-latency access to static files.

## 🚀 Getting Started

To get started with Motion, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd Motion
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    * Create a `.env.local` file in the root directory.
    * Configure the necessary environment variables for Next.js, Convex, Clerk, and Edge Store. Refer to their respective documentation for setup instructions.

4.  **Initialize Convex:**
    ```bash
    npx convex dev
    ```
    This command will start the Convex development server and guide you through the initial setup.

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

6.  **Open your browser and navigate to `http://localhost:3000`** to experience Motion.

## 🙏 Author
Deepanshu Mishra ([epicboi-deepubhai](https://github.com/epicboi-deepubhai))
