# Green Rise Nepal - Full Stack MERN Project
```
Link To Website
https://greenyouthnp.netlify.app/landing

```
## Project Overview

Green Rise Nepal is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project aims to provide a comprehensive platform that includes job listings, interactive charts, and user authentication. It serves as a robust example of modern web development practices.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Job Listings:** View, add, and manage job listings.
- **Interactive Charts:** Visualize data with charts like area charts and bar charts.
- **User Authentication:** Secure user login and registration.
- **Responsive Design:** Optimized for various devices and screen sizes.

## Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** AWS EC2 (optional, if deploying)

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js and npm:** For running the backend server and installing dependencies.
- **MongoDB:** For database management. Consider using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.
- **AWS CLI:** If deploying to AWS EC2.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-github-username/green-rise-nepal.git
   cd green-rise-nepal
   ```

2. **Install Backend Dependencies:**
   - Navigate to the backend directory (if it is separated):
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

3. **Install Frontend Dependencies:**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

## Project Structure

The project is organized into the following directories:

- **`/frontend`:** Contains the React.js application.
  - **`/public`:** Public assets and static files.
  - **`/src`:** Source files for the React application.
    - **`/components`:** React components.
    - **`/pages`:** Application pages.
    - **`/utils`:** Utility functions.
  - **`App.js`:** Main application component.
  - **`index.js`:** Entry point for the React application.

- **`/backend`:** Contains the Node.js and Express.js server.
  - **`/models`:** Mongoose models for MongoDB.
  - **`/routes`:** Express routes.
  - **`/controllers`:** Business logic for routes.
  - **`server.js`:** Main server file.

## Running the Application

### 1. Start the Backend Server

- Navigate to the backend directory:
  ```bash
  cd backend
  ```
- Run the server:
  ```bash
  npm start
  ```
  The server will be running on `http://localhost:5000`.

### 2. Start the Frontend Application

- Navigate to the frontend directory:
  ```bash
  cd frontend
  ```
- Run the application:
  ```bash
  npm start
  ```
  The React application will be available at `http://localhost:3000`.

## Deployment

### Deploying to AWS EC2

1. **Launch an EC2 Instance:**
   - Go to the [AWS Management Console](https://aws.amazon.com/console/) and launch a new EC2 instance with Ubuntu or Amazon Linux.
   - Configure security groups to allow necessary ports (e.g., 22 for SSH, 80 for HTTP).

2. **Install Required Software on EC2:**
   - SSH into your EC2 instance:
     ```bash
     ssh -i /path/to/your-key.pem ec2-user@<EC2_PUBLIC_IP>
     ```
   - Update package lists and install Node.js and npm:
     ```bash
     sudo apt-get update
     sudo apt-get install nodejs npm
     ```
   - Install Docker (optional for containerization):
     ```bash
     sudo apt-get install docker.io
     sudo systemctl start docker
     sudo systemctl enable docker
     ```

3. **Clone the Repository on EC2:**
   - Inside your EC2 instance:
     ```bash
     git clone https://github.com/your-github-username/green-rise-nepal.git
     cd green-rise-nepal
     ```

4. **Run the Application:**
   - Navigate to the backend directory and start the server:
     ```bash
     cd backend
     npm install
     npm start
     ```
   - Open another terminal session and navigate to the frontend directory:
     ```bash
     cd frontend
     npm install
     npm start
     ```

5. **Access the Application:**
   - Your application should now be accessible via the EC2 public IP address. If you have configured a domain, it will be accessible through the domain name.

## Screenshots

**1. Application Home Page:**

_(Upload a screenshot of the application's home page here.)_

**2. Job Listings Page:**

_(Upload a screenshot of the job listings page here.)_

**3. Charts Page:**

_(Upload a screenshot showing the interactive charts here.)_

**4. User Authentication:**

_(Upload a screenshot of the login or registration page here.)_

## Troubleshooting

### Common Issues and Solutions

- **EC2 Connection Issues:**
  - Ensure your EC2 security group allows inbound SSH (port 22) and HTTP (port 80) traffic.
  - Verify that you’re using the correct private key and instance public IP.

- **Frontend Not Loading:**
  - Ensure that the backend server is running and accessible from the frontend.
  - Check browser console for errors.

- **Backend Errors:**
  - Check backend logs for any runtime errors.
  - Verify that MongoDB is running and accessible.

## Future Enhancements

- **Enhanced User Features:** Add user profiles, notifications, and advanced search functionality.
- **Performance Optimization:** Implement caching and database indexing for better performance.
- **Additional Charts:** Include more chart types and data visualizations.

## Contributing

Feel free to contribute to this project by submitting issues, pull requests, or suggestions. Please ensure to follow the project's coding standards and best practices.
