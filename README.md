# Grade Test

Grade Test is an innovative platform designed to streamline the process of conducting aptitude tests for interviews. This application allows recruiters to easily schedule, create, and manage tests for candidates, providing a seamless and efficient experience for both recruiters and candidates.

#### Features

- Test Creation and Management: Design customized tests tailored to specific roles and requirements.
- Scheduling: Schedule tests and notify candidates automatically via email.
- Candidate Management: Track candidate performance and manage their progress through a centralized dashboard.

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
