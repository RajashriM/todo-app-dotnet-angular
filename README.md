# TODO App – Angular + .NET Web API

A simple TODO list application built with **Angular 20** for the frontend and .NET Web 8 API for the backend.  
This app allows users to:
- View a TODO list
- Add new TODO items
- Delete existing TODO items

Data is stored in-memory on the backend (no database required) as per assignment requirements.

---

## Tech Stack

**Frontend**
- Angular 20
- TypeScript
- HTML, SCSS
- RxJS, HttpClient

**Backend**
- .NET 8 Web API
- C#
- In-memory data storage

---

## 📂 Project Structure
todo-app/
├── frontend/ # Angular app
│ └── todo-app-frontend/
│ ├── src/
│ ├── angular.json
│ └── package.json
├── backend/ # .NET Web API app
│ └── TodoApi/
│ ├── Controllers/
│ ├── Program.cs
│ └── TodoItem.cs
├── README.md
└── .gitignore

### Prerequisites
- [Node.js](https://nodejs.org/) (latest LTS)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

---

### 1. Running the Backend (API)

```bash
cd backend/TodoApi
dotnet restore
set DOTNET_ENVIRONMENT=Development
dotnet run

By default, the API will run at:
http://localhost:5184

Swagger :
http://localhost:5184/swagger/index.html

API To call from Angular: http://localhost:5184/api/todo

### 2. Running the Frontend (Angular)
```bash
cd frontend/todo-app-frontend
npm install
ng serve

The app will run at:
http://localhost:4200

###  API Endpoints
Method	  Endpoint	      Description
GET	      /api/todo	      Get all todos
POST	    /api/todo	      Add new todo
DELETE	  /api/todo/{id}	Delete a todo
