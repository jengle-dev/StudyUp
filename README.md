# StudyUp

## Project Overview

StudyUp is a web application designed to help users prepare for exams by providing study guides, flashcards, and quizzes. The application will allow users to register, log in, and manage their accounts, including selecting subjects they want to study. Admin users will have the ability to add and delete subjects.

## Acceptance Criteria

1. **Project Structure**
   - Two project folders need to be set up: one for the frontend and one for the backend.

2. **User Authentication**
   - Users should be able to register an account.
   - Users should be able to log in.
   - Users should be able to update their account information.
   - Account information should include first name, last name, email, and a checkbox selection of subjects the user wants to study.

3. **Subjects Management**
   - Subjects can be added to the system (future feature).
   - Admin users can add and delete subjects (future feature).
   - Each subject will have a corresponding table in the database.
   - Subject tables will include at least two data points: Question and Answer.
   - Questions and Answers will be strings with dynamic character counts.
   - Rows in the subject tables will have unique IDs for referencing in flashcards and quizzes.

4. **Navigation**
   - The website should have the following sections: HOME, STUDY, QUIZ, ACCOUNT, CONTACT (maybe in footer), and ABOUT.

5. **Design**
   - The website should use a neutral color palette.
   - The website should support both light mode and dark mode.

6. **Initial Subject**
   - The initial subject will be "AZ900 Exam Prep".

## Project Structure

```filetree
StudyUp
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   ├── services
│   │   │   ├── models
│   │   │   ├── views
│   │   │   │   ├── home
│   │   │   │   ├── study
│   │   │   │   ├── quiz
│   │   │   │   ├── account
│   │   │   │   ├── contact
│   │   │   │   └── about
│   │   ├── assets
│   │   ├── styles
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   └── main.ts
│   ├── angular.json
│   ├── package.json
│   └── [README.md](http://_vscodecontentref_/1)
├── backend
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Services
│   ├── Program.cs
│   ├── Startup.cs
│   ├── appsettings.json
│   └── [README.md](http://_vscodecontentref_/2)
├── .gitignore
└── [README.md](http://_vscodecontentref_/3)
```
## Setup Instructions
### .NET 8
Ensure you have .NET 8 SDK installed. You can download it from the official .NET website.
### ASP.NET Core
Use ASP.NET Core for the backend of the web application. It provides a robust framework for building web apps and APIs.
### Angular
For the frontend, use Angular. It is a powerful framework for building dynamic web applications.
Suggested frameworks to make design easy:
- Angular Material: A UI component library for Angular developers.
### SOLID Principles
Follow SOLID principles to ensure the code is modular, maintainable, and scalable.
- Single Responsibility Principle: A class should have one, and only one, reason to change.
- Open/Closed Principle: Software entities should be open for extension, but closed for modification.
- Liskov Substitution Principle: Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
- Interface Segregation Principle: Many client-specific interfaces are better than one general-purpose interface.
- Dependency Inversion Principle: Depend on abstractions, not on concretions.
### Documentation and Comments
Document the code with clear and clean comments.
- Use XML comments for public members to generate API documentation.
- Ensure that comments explain the purpose of the code and any complex logic.
### Additional Notes
- Ensure to set up a local SQL database for development.
- Use Entity Framework Core for database interactions.
- Follow best practices for security, performance, and scalability.
- Adhere to the DRY (Don't Repeat Yourself) principle to reduce redundancy.
- Follow general development best practices to ensure code quality and maintainability.