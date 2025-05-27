# HDM Todo List – Fullstack Technical Test

## Project Summary

It is a fullstack Todo List application implemented as part of the technical test. It includes:

* A frontend implemented using React, Vite, TypeScript, and MUI
* A backend implemented using NestJS, Prisma, and MySQL
* Full CRUD operations on tasks (Create, Read, Update, Delete)
* Bonus features to enhance UX and developer experience

---

## Repositories

The project is split into two publicly available GitHub repositories:

* Frontend Repo: https://github.com/YaroslavS2022/hdm-todo-frontend
* Backend Repo: https://github.com/YaroslavS2022/hdm-todo-backend

---

## What Was Implemented

The base project already included a working task fetch endpoint (`GET /tasks`) and basic structure. The following features were implemented as part of this test:

### Backend Work

* Added `POST /tasks` for adding new tasks
* Added `PATCH /tasks/:id` for updating existing tasks
* Added input validation and error messages
* Used Prisma ORM for interacting with the database
* Introduced new endpoints into existing controller/use case/repository codebase

### Frontend Work

* Added creating new tasks via an input field and "Ajouter" button
* Added editing existing tasks (inline text field per item)
* Save button not clickable unless name has changed and is not empty
* Also editable using press of Enter key
* Added task removal using correct API endpoint
* Added confirmation popup before removal
* Refactored task display with MUI Paper components for less cluttered UI
* Added UX polish: spacing, layout, disabled buttons, keyboard management

---

## Bonus Features

* Keyboard shortcut support: use Enter to save or add tasks
* Confirmation dialog before deletion
* Disabled save button when there are no changes
* Simple and clean UI design with MUI components
* Controlled local state mapping inputs
* Provided UI polish with spacing, alignment, and consistent layout

---

## Design and Logic Decisions

* Maintained code modularity using React hooks and reusable handler functions
* Used controlled inputs for all tasks to enable inline editing
* Chose to dynamically disable save buttons to prevent redundant API requests
* Added confirmation dialog with `window.confirm()` for basic UX improvement
* Kept the layout minimalist but visually distinct with MUI `Paper` and `Box`

---

## Final Notes

* The entire project was completed within the 4-hour deadline
* Legible, readable, and consistent code was prioritized over cramping it into a very tight time box
* All primary requirements and one or more bonus features were implemented

---

## Demo Video

You'll get to see a video showing task creation, editing, removal, and extra features in action.

Thanks for looking at my entry!
