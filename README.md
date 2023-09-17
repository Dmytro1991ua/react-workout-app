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

## Technologies, libraries and tools used:
- `React`
- `Redux Toolkit`
- `Leaflet/React-Leaflet`
- `Typescript`
- `Styled-Components`
- `Firebase`
- `Axios`
- `MongoDB`
- `Mongoose`
- `Express`
- `React Hook Form`
- `Yup`
- `React Table`
- `React Table sticky`
- `Swiper`, 'etc

## Getting started
To get started with the `Workout` project, follow these steps:
- Clone the repository via `HTTPS` or `SSH` key:
  > via `HTTPS`

  ```
  https://github.com/Dmytro1991ua/react-workout-app.git
  ```

  > via `SSH` key

  ```
  git@github.com:Dmytro1991ua/react-workout-app.git
  ```
- Install needed dependencies from the `root` directory for `frontend` and `backend` folders (or you could proceed directly to mentioned folders and install packages from there)
  > Installing from the `root` directory

  ```
  npm run packages-install => It will install packages for frontend and backend folders at the same time
  ```

  > Installing from  `frontend` and `backend` folders individually

  ```
  cd frontend
  npm install
  ```

  ```
  cd backend
  npm install
  ```

- Create a `.env` file separately for `root` and `frontend` directories and set the following environment variables:
    > `env` file for `root` directory

    ```
    NODE_ENV=development
    PORT=8080
    REACT_APP_CONNECT_MONGODB_VIA_MONGOOSE="mongodb+srv://your_connection_with_mongoDB"
    REACT_APP_FIREBASE_PROJECT_ID="your_firebase_project_id"
    REACT_APP_FIREBASE_KEY_ID="your_firebase_key_id"
    REACT_APP_FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY---your_key_id-----END PRIVATE KEY-----\n"
    REACT_APP_FIREBASE_CLIENT_EMAIL="your_firebase_client_email"
    REACT_APP_FIREBASE_CLIENT_ID="your_firebase_client_id"
    REACT_APP_FIREBASE_AUTH_URI="your_firebase_auth_uri"
    REACT_APP_FIREBASE_TOKEN_URI="your_firebase_token_uri"
    REACT_APP_FIREBASE_AUTH_PROVIDER_X509_CERT_URL="your_firebase_auth_provider_cert_url"
    REACT_APP_FIREBASE_CLIENT_X509_CERT_URL="your_firebase_client_cert_url"
  ```

  > `env` file for `frontend` directory

  ```
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_AUTH_DOMAIN=auth-your_firebase_auth_domain
   REACT_APP_PROJECT_ID=ayour_fibase_project_id
   REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender
   REACT_APP_MESSAGING_APP_ID=your_firebase_messaging_app_id
   REACT_APP_WEATHER_API_ENDPOINT=your_openweathermap_api_endpoint
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
   REACT_APP_WEATHER_API_ICON=your_openweathermap_api_icon
   REACT_APP_API_BASE_URL=your_project_api_base_url
  ```

 - In order to run the project `locally`, run the following commands from the `root` directory  
    > run `backend`

    ```
    npm run server
    ```

    > run `frontend`

    ```
    npm run client
    ```
    
- Open your browser and navigate to `http://localhost:3000` to access the `Workout` app.

## Screenshots
> User Authentication

![screencapture-localhost-3000-auth-login-2023-09-17-11_36_34](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/4d7ae152-2d0d-4ea0-842f-fcb6b3e44c2e)

![screencapture-localhost-3000-auth-signup-2023-09-17-11_37_51](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/4b1bb75c-42fa-4d81-87cb-646d49f4c840)

![screencapture-localhost-3000-auth-forgot-password-2023-09-17-11_40_05](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/9572a127-49a4-4a27-9de4-6b757ec29dc8)

> Home
> 
![screencapture-localhost-3000-2023-09-17-11_51_12](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/db6de845-3e98-4a19-b562-b6f6b32a1886)

> Workouts

![screencapture-localhost-3000-workouts-2023-09-17-11_43_24](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/148c1cd1-762e-44a5-b408-5bf1190ab07f)

![screencapture-localhost-3000-workouts-2023-09-17-11_45_23](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/7012e262-fe8f-4a20-8b14-29950eaa906b)

![screencapture-localhost-3000-workouts-2023-09-17-11_46_05](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/6e50c6f9-6979-48b8-80f5-8025034416f6)

![screencapture-localhost-3000-workouts-2023-09-17-11_48_03](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/45b0b757-97b5-4dea-a082-9a10d9b26692)

![screencapture-localhost-3000-workouts-2023-09-17-11_49_04](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/ac666eaf-3326-4c06-a5a3-37d44451fec8)

![screencapture-localhost-3000-workouts-2023-09-17-11_49_40](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/a3bdd270-a17b-469d-a264-7c638c8cbfbf)

> Workouts Details

![Untitled](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/9de91423-d56e-463d-8687-f550d0ef7100)

![screencapture-localhost-3000-workouts-details-2023-09-17-11_55_09](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/117a35ad-1791-4cb1-9eae-7de5ea1cb2ec)

> BMI Calculator

![screencapture-localhost-3000-bmi-calculator-2023-09-17-11_57_09](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/95c64b53-75c4-4b05-bf17-fe7f8edeaaf5)

![screencapture-localhost-3000-bmi-calculator-2023-09-17-11_58_24](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/cec679c2-23a0-41e0-bbff-9947fce2af36)

![screencapture-localhost-3000-bmi-calculator-2023-09-17-13_42_32](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/9b239367-7738-4783-b3d1-d95b7ef91317)

![screencapture-localhost-3000-bmi-calculator-2023-09-17-13_43_20](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/c081d66f-5cf5-470a-bd9f-17beb6a43627)

![screencapture-localhost-3000-bmi-calculator-2023-09-17-13_44_25](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/735aa40e-e78f-48bf-b20d-79e1e0e116cf)

![screencapture-localhost-3000-bmi-calculator-2023-09-17-13_46_41](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/e771c40d-086b-4bde-9d8c-7e01223cbd4f)

![screencapture-localhost-3000-bmi-calculator-2023-09-17-13_47_23](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/daa1a486-105d-436f-9df2-98e6cb8799c4)

> Workouts Quiz

![screencapture-localhost-3000-workouts-quiz-2023-09-17-13_48_14](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/1a820b08-8b05-44a7-8e53-700255350903)

![screencapture-localhost-3000-workouts-quiz-2023-09-17-13_48_41](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/199948f7-a09d-4518-96a6-e41cdf65c2ad)

![screencapture-localhost-3000-workouts-quiz-2023-09-17-13_49_30](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/d446158f-2b93-4b17-a7d2-9684643bb07a)

> Profile

![screencapture-localhost-3000-profile-2023-09-17-13_50_26](https://github.com/Dmytro1991ua/react-workout-app/assets/61331410/fbd48884-a43f-4977-8c82-f373cb76646f)

## API
> In order to work with real weather data, I decided to leverage external APIs, such as `OpenWeatherMap`, which provides access to a wide range of weather-related data

### User

-
Endpoint
```
GET: /api/users/me - Returns the data of the current, authenticated user
```

Example of returned data
```
{
    "_id": "64fd677ed456a0975d73ed9f",
    "uid": "Ng48H9LuUPS9ODU2DMaeqWzJl8P2",
    "email": "alex2021new1666@gmail.com",
    "emailVerified": false,
    "authTime": "1694329280",
    "createdAt": "2023-09-10T06:51:42.408Z",
    "updatedAt": "2023-09-11T14:20:21.164Z",
    "__v": 0
}
```

-
Endpoint
```
POST: /api/users/profile - Returns updated user's profile data, such as avatar, name, password
```

Payload
```
{
    "name": "Alex Smith",
    "photoURL": "https://firebasestorage.googleapis.com/v0/b/auth-development-a6e59.appspot.com/o/usersImages%2FNg48H9LuUPS9ODU2DMaeqWzJl8P2%2Fdt-logo-without-text.png?alt=media&token=12ba58dd-3ec0-47a2-8104-f78a3dc6539a"
}
```

Example of returned data
```
{
    "_id": "64fd677ed456a0975d73ed9f",
    "uid": "Ng48H9LuUPS9ODU2DMaeqWzJl8P2",
    "email": "alex2021new1666@gmail.com",
    "emailVerified": false,
    "authTime": "1694329280",
    "createdAt": "2023-09-10T06:51:42.408Z",
    "updatedAt": "2023-09-11T14:35:56.252Z",
    "__v": 0,
    "name": "Alex Smith",
    "photoURL": "https://firebasestorage.googleapis.com/v0/b/auth-development-a6e59.appspot.com/o/usersImages%2FNg48H9LuUPS9ODU2DMaeqWzJl8P2%2Fdt-logo-without-text.png?alt=media&token=12ba58dd-3ec0-47a2-8104-f78a3dc6539a"
}
```

### Workout Quiz

Endpoint
```
GET: /api/workouts-quiz - Returns data with all available workout quiz questions
```

Example of returned data
```
[
  {
    "_id": "63c4020a2922846027f0cc8e",
    "question": "Which of the following is a long term adaptation to muscular strength training?",
    "answers": [
        {
            "answerOption": "Increased size of type II muscle fibres",
            "isCorrect": true
        },
        {
            "answerOption": "Decreased size of type II muscle fibres",
            "isCorrect": false
        },
        {
            "answerOption": "Increased number of type II muscle fibres",
            "isCorrect": false
        },
        {
            "answerOption": "Decreased number of type II muscle fibres",
            "isCorrect": false
        }
    ]
  }
]
```

### Workouts
-
Endpoint
```
GET: /api/workouts - Returns data with all available workouts for a particular user
```

Example of returned data
```
[
    {
        "weatherInfo": {
            "countryInfo": {
                "country": "UA",
                "sunrise": 1694836839,
                "sunset": 1694882248
            },
            "city": "Lviv",
            "temperature": 291.12,
            "maxTemperature": 291.12,
            "minTemperature": 291.12,
            "pressure": 1025,
            "humidity": 61,
            "feelsLike": 290.57,
            "weatherInfo": [
                {
                    "description": "clear sky",
                    "icon": "01d",
                    "id": 800,
                    "main": "Clear",
                    "_id": "6505627426385219a92dde47"
                }
            ],
            "windSpeed": 5.4
        },
        "_id": "6505627426385219a92dde46",
        "user": "MNs8B6HU1oc1hhJKIROTHLnIPWX2",
        "date": "9/16/2023",
        "coordinates": [
            49.84607285062789,
            24.02331923884615
        ],
        "selectedValue": "running",
        "distance": 3,
        "duration": 30,
        "cadence": "12",
        "pace": 10,
        "description": "Running 3 km on September 16 at 11:08:19 AM",
        "isFavorite": false,
        "createdAt": "2023-09-16T08:08:20.459Z",
        "updatedAt": "2023-09-16T08:08:20.459Z",
        "__v": 0
    }
]
```
-
Endpoint
```
POST: /api/workouts - Creates a new workout
```

Payload
```
{
    "date": "9/17/2023",
    "coordinates": [
        49.76378217754174,
        24.129008560936406
    ],
    "selectedValue": "cycling",
    "distance": 5,
    "duration": 180,
    "isFavorite": false,
    "weatherInfo": {
        "city": "Solonka",
        "temperature": 291.12,
        "maxTemperature": 291.12,
        "minTemperature": 291.12,
        "pressure": 1021,
        "humidity": 66,
        "feelsLike": 290.7,
        "weatherInfo": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "windSpeed": 4.52,
        "countryInfo": {
            "country": "UA",
            "sunrise": 1694923305,
            "sunset": 1694968488
        }
    },
    "elevationGain": "12",
    "speed": 1.7,
    "description": "Cycling 5 km on September 17 at 10:04:06 AM"
}
```

Example of returned data
```
{
    "user": "MNs8B6HU1oc1hhJKIROTHLnIPWX2",
    "date": "9/17/2023",
    "coordinates": [
        49.76378217754174,
        24.129008560936406
    ],
    "selectedValue": "cycling",
    "distance": 5,
    "duration": 180,
    "elevationGain": "12",
    "description": "Cycling 5 km on September 17 at 10:04:06 AM",
    "speed": 1.7,
    "isFavorite": false,
    "weatherInfo": {
        "city": "Solonka",
        "temperature": 291.12,
        "maxTemperature": 291.12,
        "minTemperature": 291.12,
        "pressure": 1021,
        "humidity": 66,
        "feelsLike": 290.7,
        "weatherInfo": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear",
                "_id": "6506a4e7a8c0a1b04a515880"
            }
        ],
        "windSpeed": 4.52,
        "countryInfo": {
            "country": "UA",
            "sunrise": 1694923305,
            "sunset": 1694968488
        }
    },
    "_id": "6506a4e7a8c0a1b04a51587f",
    "createdAt": "2023-09-17T07:04:07.647Z",
    "updatedAt": "2023-09-17T07:04:07.647Z",
    "__v": 0
}
```

-
Endpoint
```
PUT: /api/workouts/:id - Updates a particular workout by its `id`
```

Payload
```
{
    "weatherInfo": {
        "countryInfo": {
            "country": "UA",
            "sunrise": 1694836839,
            "sunset": 1694882248
        },
        "city": "Lviv",
        "temperature": 291.12,
        "maxTemperature": 291.12,
        "minTemperature": 291.12,
        "pressure": 1025,
        "humidity": 61,
        "feelsLike": 290.57,
        "weatherInfo": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear",
                "_id": "6505627426385219a92dde47"
            }
        ],
        "windSpeed": 5.4
    },
    "_id": "6505627426385219a92dde46",
    "user": "MNs8B6HU1oc1hhJKIROTHLnIPWX2",
    "date": "9/16/2023",
    "coordinates": [
        49.84607285062789,
        24.02331923884615
    ],
    "selectedValue": "running",
    "distance": 4,
    "duration": 40,
    "cadence": "19",
    "pace": 10,
    "description": "Running 3 km on September 16 at 11:08:19 AM",
    "isFavorite": false,
    "createdAt": "2023-09-16T08:08:20.459Z",
    "updatedAt": "2023-09-16T08:08:20.459Z",
    "__v": 0,
    "elevationGain": ""
}
```

Example of returned data
```
{
    "weatherInfo": {
        "countryInfo": {
            "country": "UA",
            "sunrise": 1694836839,
            "sunset": 1694882248
        },
        "city": "Lviv",
        "temperature": 291.12,
        "maxTemperature": 291.12,
        "minTemperature": 291.12,
        "pressure": 1025,
        "humidity": 61,
        "feelsLike": 290.57,
        "weatherInfo": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear",
                "_id": "6505627426385219a92dde47"
            }
        ],
        "windSpeed": 5.4
    },
    "_id": "6505627426385219a92dde46",
    "user": "MNs8B6HU1oc1hhJKIROTHLnIPWX2",
    "date": "9/16/2023",
    "coordinates": [
        49.84607285062789,
        24.02331923884615
    ],
    "selectedValue": "running",
    "distance": 4,
    "duration": 40,
    "cadence": "19",
    "pace": 10,
    "description": "Running 3 km on September 16 at 11:08:19 AM",
    "isFavorite": false,
    "createdAt": "2023-09-16T08:08:20.459Z",
    "updatedAt": "2023-09-17T07:07:54.053Z",
    "__v": 0,
    "elevationGain": ""
}
```

-
Endpoint
```
DELETE: /api/workouts/:id - Deletes a particular workout by its `id`
```

Expected returned data
```
6506a4e7a8c0a1b04a51587f
```

-
Endpoint
```
DELETE: /api/workouts/deleteAllWorkouts - Deletes all workouts
```

Expected returned data
```
{
    "success": true,
    "message": "All workouts have been deleted successfully",
    "deleteAllWorkouts": {
        "acknowledged": true,
        "deletedCount": 2
    }
}
```

-
Endpoint
```
DELETE: /api/workouts/:id/addToFavorites - Add a particular workout to a favorites
```

Expected returned data
```
{
    "weatherInfo": {
        "countryInfo": {
            "country": "UA",
            "sunrise": 1694923335,
            "sunset": 1694968525
        },
        "city": "Bryukhovychi",
        "temperature": 291,
        "maxTemperature": 291,
        "minTemperature": 291,
        "pressure": 1021,
        "humidity": 66,
        "feelsLike": 290.56,
        "weatherInfo": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear",
                "_id": "6506a7c6a8c0a1b04a51588b"
            }
        ],
        "windSpeed": 4.15
    },
    "_id": "6506a7c6a8c0a1b04a51588a",
    "user": "MNs8B6HU1oc1hhJKIROTHLnIPWX2",
    "date": "9/17/2023",
    "coordinates": [
        49.87739415432064,
        23.98899078369141
    ],
    "selectedValue": "running",
    "distance": 12,
    "duration": 180,
    "cadence": "12",
    "pace": 15,
    "description": "Running 12 km on September 17 at 10:16:22 AM",
    "isFavorite": true,
    "createdAt": "2023-09-17T07:16:22.949Z",
    "updatedAt": "2023-09-17T07:16:32.852Z",
    "__v": 0
}
```
