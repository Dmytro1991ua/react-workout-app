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
