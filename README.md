# Social Network: A React Native Expo Social Media App with Spring Boot Backend

This project is a social media application built using React Native and Expo for the front end and a Spring Boot backend with CSRF protection and authentication. The backend handles all posts and image uploads.


## Features

## React Native Expo Frontend
        Cross-platform mobile application (iOS and Android)
        Image upload functionality from camera or gallery
        Post creation with text and image content

## Spring Boot Backend
        RESTful API
        User authentication
        CSRF protection
        Stores posts and images

       # Requirements
## Frontend

    Node.js
    Expo CLI

## Backend

    Java
    Maven or Gradle
    Spring Boot

# Installation
## Frontend

1.    Clone the repository:
    
```
git clone https://github.com/sleepyren/socialnetwork
cd reactnativeapp
```
    
2. Install dependencies
    ```
    npm install
    ```
3. Create a .env file in the root for the backend env variable
```
EXPO_PUBLIC_BACKEND = {IP}
```

4. Start the Expo server
```
npm run start
```

## Backend

1. Change Directory
```
cd socialnetworkbackend
```

2. Create an env.properties file for the root user username/password

```
ROOT_USERNAME =user
ROOT_PASSWORD =pass
```

3. Run project in terminal (or IDE if you prefer)

```
mvn spring-boot:run
```

## Usage

### Run the backend:
Ensure the Spring Boot backend is running.

###    Run the frontend:
Start the Expo development server and use the Expo Go app to scan the QR
code or run the project on an emulator.

### Access the application:
        Register and login using the authentication endpoints.
        Create posts with text and images.
        Upload images from the camera or gallery.
        Experience an intuitive User Interface.



