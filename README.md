# Grade Test: The Ultimate Interview Aptitude Test Platform

## Project Overview
Grade Test is a cutting-edge application designed to streamline the process of conducting aptitude tests for interviews. This platform is a boon for recruiters and hiring managers, offering an efficient way to schedule, create, and manage tests for candidates. Built with the latest web technologies, Grade Test ensures a seamless and intuitive user experience.

### Key Features
- **Test Creation and Management**: Easily design customized tests tailored to the specific needs of your organization or the role you are hiring for.
- **Scheduling**: Effortlessly schedule tests and notify candidates with automated emails, ensuring smooth coordination and communication.
- **Candidate Management**: Keep track of candidate performance and progress through a centralized dashboard, making the evaluation process more organized and effective.
- **User-Friendly Interface**: Navigate the platform effortlessly with an intuitive user interface. Both recruiters and candidates can easily access and complete tests, enhancing the overall experience.
- **Scalability**: Whether you're a small startup or a large enterprise, Grade Test scales to meet your requirements. Handle high volumes of candidates without compromising on performance.

## Author(s) and Maintainers
- **Author**: vignesh M
- **Contact Information**: vignesh.mohan@colanonline.com
- **Role**: Developer

### Contributions
If you are interested in contributing to this project, please reach out via email. Contributions are welcome, and guidelines for contributing can be found in the `CONTRIBUTING.md` file in the repository.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
We would like to thank all the contributors and the open-source community for their invaluable support. Special thanks to the developers of the libraries and tools that made this project possible.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Author(s) and Maintainers](#authors-and-maintainers)
- [License](#license)
- [Acknowledgements](#acknowledgements)



#### Technology Stack

- Frontend: React with Vite
- Backend: Firebase (Firestore and Authentication)
- Email System: EmailJS

### Installation

    Follow these steps to set up the Grade Test application on your local machine.

#### Prerequisites

Make sure you have the following software installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Git

## Clone the Repository

```
git clone https://github.com/vigneshm2811/Grade-Test.git
cd gradetest
```

## Install Dependencies

```
npm install
#or
yarn install
```

### Configure Firebase

##### 1. Firebase Project Setup:

- Go to the Firebase Console.
- Create a new project or use an existing one.
- Enable Firestore and Authentication (Email/Password).

##### 2. Firebase Config:

- Navigate to Project Settings in the Firebase Console and locate your Firebase configuration.
- Create a new file named .env.local in the root directory of your project.
- Add your Firebase configuration to .env.local:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### Configure EmailJS

##### 1. EmailJS Account Setup:

- Go to the EmailJS website.
- Sign up for a free account.
- Create a new EmailJS service and template.

##### 2. EmailJS Config:

- Add your EmailJS credentials to .env.local

```
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_USER_ID=your-user-id
```

### Run the Application

Start the development server:

```
npm run dev
# or
yarn dev
```

Open your browser and navigate to http://localhost:5173 to see the application in action.
