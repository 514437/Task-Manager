
# Task Manager

A full-stack task management application featuring a json database that uses Node.js/Express for the backend and html, css and javascript, for the frontend. It provides a Kanban-style dashboard for organising tasks and authentication for users is managed by Supabase. Encryption is used to encrypt and decrypt text when it appears on a web browser. 

![Dashboard](https://github.com/514437/Task-Manager/blob/main/Screens/View_Tasks.png)

## Features

*   **CRUD Operations:** Create, read, update and delete tasks.
*   **Kanban Board:** A visual task based status interface to manage across four stages: "Tasks Ready", "In Progress", "Needs Review" and "Done".
*   **User Authentication:** Secure sign-in and registration functionality handled by Supabase.
*   **Task Search:** Search for tasks by their unique ID or keywords in the title and description.
*   **Persistent Storage:** The backend stores all task data in a local `tasks.json` file.
*   **Responsive Interface:** The UI is designed to be functional across different screen sizes.
*   **Encryption:** Task controller encryption for encrypting text before saving and decrypting when retrieving using CryptoJS. Also ready for Hypertext Transfer Protocol Secure web publishing. 
*   **User behaviour monitor:** Implemented to measure user behaviour to identify treads and patterns to help improve productivity and web application security. 

## Tech Stack

*   **Backend:** Node.js & Express.js
*   **Frontend:** HTML, CSS and JavaScript
*   **Authentication:** Supabase
*   **Database:** Local JSON file (`tasks.json`)
*   **Dependencies:** `express`, `cors`, `uuid`, `crypto` and `typescript` 

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/514437/Task-Manager.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Task-Manager
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
    **If npm install does not install all packages, install the following packages:**
    ```sh
    npm install express cors uuid
    npm install typescript
    npm install crypto-js
    ```
5.  **Start the server:**
    ```sh
    node server.js
    ```
    The server will be running on `http://localhost:202`.

6.  **Access the application:**
    Open your web browser and navigate to `http://localhost:202`. This will load the login page.

7.  **Login:**
    The registration page is currently being reconfigured, so may take longer than expected when creating a new account. Use the following credentials to sign in:
    *   **Email:** `info@taskmanager.com`
    *   **Password:** `5E8Zlu01(kcz1wj*50gF`

## API Endpoints

The backend server provides the following RESTful API endpoints for managing tasks.

| Method | Endpoint         | Description                                        |
| :----- | :--------------- | :------------------------------------------------- |
| `GET`  | `/tasks`         | Retrieves a list of all tasks.                     |
| `GET`  | `/tasks/:id`     | Retrieves a single task by its `task_id`.          |
| `POST` | `/tasks`         | Creates a new task.                                |
| `PUT`  | `/tasks/:id`     | Updates an existing task by its `task_id`.         |
| `DELETE`| `/tasks/:id`     | Deletes a task by its `task_id`.                   |
| `GET`  | `/search?q=<...>`| Searches tasks by ID, Title or Description.       |

### Task Object Structure

```json
{
  "task_id": "string (uuid)",
  "title": "string",
  "description": "string",
  "status": "string (e.g., 'Tasks Ready', 'In Progress')",
  "due_datetime": "string (ISO 8601 format)"
}
```

## File Structure

```
├── public/                # All frontend assets (HTML, CSS, JS & TS)
|   ├── 404.html           # 404 page if error on app appears
|   ├── 404.css            # Styles for 404 page
|   ├── account.html       # New account page
|   ├── account.css        # Styles for account page
|   ├── backbutton.js      # Javascript backbutton function
|   ├── backbutton.ts      # Typescript backbutton function
│   ├── config.js          # Config file if app is published 
│   ├── dashboard.html     # The main Kanban board page
│   ├── dashboard.css      # Styles for the main Kanban board page
│   ├── dashboard.js       # Javascript for the main Kanban board page
│   ├── index.html         # The login page
│   ├── index.css          # Styles for the login page
│   ├── logout.js          # Javascript logout function 
│   ├── register.html      # The user registration page
│   ├── register.css       # Styles for the registration page 
│   ├── auth.js            # Supabase email/password login logic
│   ├── register.js        # Supabase registration logic
│   ├── supabase.js        # Supabase client initialisation
│   └── styles.css         # Styling used throughout web app
├── Screens/               # Screens of Task Manager (png)
|   ├── Delete_Task_1.png  # Screen Displaying Deleted Task
|   ├── Delete_Task_2.png  # Screen Displaying Deleted Task
|   ├── New_Task.png       # Screen Displaying New Task Added
|   ├── Search.png         # Screen Displaying Search Page
|   ├── Sign_In.png        # Screen Displaying Sign In Page
|   ├── Sign_Up.png        # Screen Displaying Sign Up Page
|   ├── Update_Task_1.png  # Screen Displaying Update
|   ├── Update_Task_2.png  # Screen Displaying Update 
│   └── View_Tasks.png     # Screen Displaying Dashboard
├── server.js              # The Express.js backend server
├── tasks.json             # JSON file used as a database for tasks
├── tasksController.js     # Encrypting and Decrypting
├── .env                   # secure file if app is published online
└── package.json           # Project dependencies and scripts
```
