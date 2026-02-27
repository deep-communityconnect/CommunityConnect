# Contributing to CommunityConnect

Welcome to the **CommunityConnect** project! This guide explains how to properly set up the project locally, the Git contribution steps to follow, and our specific rules regarding pull requests.

---

## 🚀 Setting Up the Project

The project is split into a Django/Python `backend` and a React/Node `frontend`. You need to set up both to run in your local environment.

### 1. Backend Setup (Django)

1. Open your terminal and change into the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (`venv`):
   ```bash
   python -m venv venv
   
   # Activate on Windows:
   venv\Scripts\activate
   
   # Activate on macOS/Linux:
   source venv/bin/activate
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations to set up the local database:
   ```bash
   python manage.py migrate
   ```
5. Start the backend development server:
   ```bash
   python manage.py runserver
   ```

### 2. Frontend Setup (React)

1. Open a new terminal tab and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the necessary Node packages:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## 🛠️ Git Workflow & How to Commit

We expect all contributors to follow standard Git practices to keep the history clean and ensure everyone is working with the latest changes. 

### Step 1: Make Your Changes
Write your code, test it locally, and ensure NO errors exist on either the frontend or backend.

### Step 2: Stage and Commit
Once your changes are ready, stage all the files you created or modified using:
```bash
git add .
```

Then, commit your changes. Make sure to provide a clear and descriptive commit message:
```bash
git commit -m "brief explanation of what you changed"
```
*(Example: `git commit -m "Fix login button styling"`)*

### Step 3: Fetch the Latest Code
Before pushing any code, **always fetch the latest changes** from the repository to prevent conflicts with the work of other contributors:

```bash
git pull origin <branch-name>
```
*If there are merge conflicts, resolve them locally before proceeding.*

---

## ⚠️ Custom Workflow Rule: NO PULL REQUESTS

**DO NOT CREATE A PULL REQUEST.**

We use a direct collaboration model. Once you have staged and committed your changes, please follow this process:

1. **Take a pull of the latest code** directly from the branch to sync up.
2. Push your changes. 
3. **Inform the author of the branch** via internal channels (e.g., chat/email) that you have made updates and they should take the latest code.
 
Thank you for your contributions!
