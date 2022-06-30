# Petstagram

Petstagram is an Instagram inspired app for pets so people can show off their favorite pet photos. This is the backend repo for the app (the frontend repo can be found [here](https://github.com/cjeong1021/Mern-project-frontend))

## Technologies Used

- NodeJS
- Express
- Mongodb & Mongoose
- Heroku (for deployment)

## Installation

First, clone this repo and cd into it. Then install the necessary packages.

```
npm install
```

After installing, run the seed file in order to populate the database with sample data.

```
node db/seed.js
```

Finally, run the backend server using nodemon.

```
nodemon
```

You should see the server running in the terminal at PORT: 8000.

## Database Modelling

There are three models used to structure the database: Users, Posts and Comments. The relationship between each model is shown in the ERD below.
