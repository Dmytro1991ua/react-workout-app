# Workout App
The `Workout React App` is a full-stack web application designed to help users track and manage their running and cycling workouts. This project consists of both frontend and backend components, allowing users to create, edit, and view workout details, calculate their BMI, take a workout quiz, and manage their user profile, etc. The app also provides real-time weather information for workout locations and leverages Firebase Authentication for user management.

![screencapture-localhost-3000-workouts-2023-09-10-10_01_46](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/7f49873e-9ce8-4a25-b973-afe8e10c89f6)

## Motivation

This project is a labor of love that stems from a deep passion for web development and a commitment to creating a robust fitness and exercise tracking solution. I embarked on this project with several key objectives:
- `Mastery of React`: React is the cornerstone of modern web development, and I personally aimed to deepen my understanding of this powerful library. Through this project, I've honed my React skills and gained valuable experience in building dynamic user interfaces.
- `Exploration of Frontend Technologies`: This project allowed us to explore a wide range of frontend technologies and libraries within the React ecosystem. I've integrated tools, components, and patterns that exemplify best practices in modern web development (at least I tried to do my best :) ).
- `Leaflet/React-Leaflet Mastery`: To provide an engaging and interactive mapping experience, I practiced using `Leaflet` and `React-Leaflet`. This allowed me to create an intuitive workout route creation feature that enhances the overall user experience.
- `Leveraging Geolocation API`: To enhance the user experience and provide precise workout tracking, I've integrated the `Geolocation API`. This allows us to track the user's location accurately during workouts, providing valuable data for workout routes and performance analysis, etc.
- `Fitness and Wellness Focus`: My passion for fitness and wellness inspired me to create an application that not only tracks workouts but also promotes a healthy lifestyle. I've included features like the BMI calculator, workout quiz, and real-time weather data to enhance the fitness experience, etc.
- `Empowering Users`: I believe in empowering users to take control of their fitness journeys. With this app, users can easily create, manage, and analyze their workouts, enabling them to set and achieve their fitness goals.
- `Continuous Learning`: The project provided me with an opportunity for continuous learning. I've tackled real-world challenges, refined my problem-solving skills, and expanded my knowledge of React and its ecosystem.

  I sincerely hope that this React-based workout app serves as a valuable resource for fitness enthusiasts and web developers alike. Whether you're looking to track your workouts, explore React development, or simply stay active and healthy, we invite you to join us on this exciting journey.

## Features

#### Workout Creation and Management
- `Create Workouts`: Easily create running or cycling workouts by clicking on a map to set your workout data. Specify details such as distance, duration, cadence for running or elevation for cycling in order to keep track of your workout and always be in good shape.
- `Workout Management`: View a list of your created workouts, sort them by various parameters or reset chosen sorting options, edit workout details as needed, see all workouts within the map no matter where you created the workout, delete workouts individually or delete them all, etc.
- `Favorite Workouts`: Mark your favorite workouts for quick access and tracking of preferred exercise routines and be able to track your favorite workouts within the Workout Details page.

#### Fitness Insights
- `Weather Information`: Get real-time weather data for the workout location, helping you plan activities based on weather conditions.
- `BMI Calculator`: Calculate your Body Mass Index (BMI) to assess your fitness levels and track progress.

#### Interactive Experience
- `Workout Quiz`: Test your fitness knowledge and learn more about effective workout practices with an engaging quiz.
- `Profile Management`: Easily manage your profile, and update personal information, such as avatar, password, etc.

#### Backend Integration

- `Custom Backend`: Utilize a custom backend powered by `MongoDB` for data storage and retrieval.

- `API Integration`: `OpenWeatherMap API` for real-time weather data.
