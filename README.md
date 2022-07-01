# Petstagram

Petstagram is an Instagram inspired app for pets so people can show off their favorite pet photos. This is the backend repo for the app (the frontend repo can be found [here](https://github.com/cjeong1021/Mern-project-frontend)) (the deployed version of this database can be found [here](https://petstagram-backend.herokuapp.com/)).

## Important Endpoints

- [https://petstagram-backend.herokuapp.com/petstagram/users](https://petstagram-backend.herokuapp.com/petstagram/users)

This endpoint will pull all the data for users that exist in the database. These user models contain ObjectIds that point to different posts that were made by that user. Adding the ObjectId for that user after the endpoint (https://petstagram-backend.herokuapp.com/petstagram/users/<INSERT ID HERE>) will only pull data for that specific user.

- [https://petstagram-backend.herokuapp.com/petstagram/posts](https://petstagram-backend.herokuapp.com/petstagram/posts)
  
  This endpoint will pull all the posts that exist in the database. The posts contain ObjectIds that point to different comments that were made under the post, as well as point to the user who made the post. Adding the ObjectId at the end of the endpoint will also work for this.
  
- [https://petstagram-backend.herokuapp.com/petstagram/comments](https://petstagram-backend.herokuapp.com/petstagram/comments)
  
  This endpoint will pull all the comments that exist in the database. The comments contain ObjectIds that point to the user who made the comment as well as the post that the comment was made under. Adding the ObjectId at the end of the endpoint will also work for this.

# Technologies Used

- NodeJS
- Express
- Mongodb & Mongoose
- Heroku (for deployment)

# Installation

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

# Database Modelling

There are three models used to structure the database: Users, Posts and Comments. The relationship between each model is shown in the ERD below.


![ERD Diagram](https://user-images.githubusercontent.com/14892355/176747962-b0914427-d362-4fe4-88d0-038933f8ff82.jpeg)

## Users

The Users model holds important information about the user such as name, type, breed, username, password and links to Posts model. This links users to posts that they have created and allows the backend to pull up posts that are related to them. This model is also used to create and verify accounts on the login screen.

### Endpoints and Requests

The endpoints for the users allow for GET, POST and PUT requests so that users can login into their account, create an account and edit their account. 
  
  ```
  GET https://localhost:8000/petstagram/users/<UserObjectId>
  ```
  
  Get all users or specify user ObjectId to pull specific user.
  
  ```
  POST https://localhost:8000/petstagram/users/
  ```
  
  Create a user by sending post request and user Object in request body
  ```
  PUT https://localhost:8000/petstagram/users/:UserObjectId
  ```
  
  Edit a user by sending a put request and edited user Object in request body

## Posts
  
The Posts model holds information that will be displayed on a post as well as connections to other important models. The post includes an image url, caption, amount of likes, user ObjectId and comments array with comment ObjectIds. This allows the frontend to display relevant information while having access to other important models like users and comments, so that they can be displayed as well (user's name/comments under post).
  
### Endpoints and Requests
  
  The endpoints for posts allow for GET, POST and DELETE requests so that the frontend can display posts on the main page, allow users to create their own posts and delete posts on their page.
  
  ```
  GET https://localhost:8000/petstagram/posts/<PostObjectId>
  ```
  
  Get all posts or specify post ObjectId to pull specific post.
  
  ```
  POST https://localhost:8000/petstagram/posts/:UserObjectId
  ```
  
  Create a post by sending POST request and Posts Object in request body. Make sure to specify a user ObjectId in the endpoint so that the new post can be linked to a specific user
  
  ```
  DELETE https://localhost:8000/petstagram/posts/:PostObjectId
  ```
  
  Delete a post by sending a DELETE request, with the post ObjectId in the endpoint URL.
  
## Comments
  
The Comments model holds information that will be displayed in the comment and points to a user and post. 
  
### Endpoints and Requests
  
The endpoints for posts allow for GET, POST and DELETE requests so that the frontend can display comments under their respective posts, allow users to make their own comments and delete comments on their page.

  ```
GET https://localhost:8000/petstagram/comments/<CommentObjectId>
  ```
  
  Get all comments or specify comment ObjectId to pull specific comment.
  
  ```
  POST https://localhost:8000/petstagram/posts/:PostObjectId/:UserObjectId
  ```
  Create a comment by sending POST request and a comment Object in request body. Make sure to specify a user and post ObjectId in the endpoint so that the new comment can be linked to a specific user and post.
  
  ```
  DELETE https://localhost:8000/petstagram/posts/:CommentObjectId
  ```
  
  Delete a comment by sending a DELETE request, with the comment ObjectId in the endpoint URL.
