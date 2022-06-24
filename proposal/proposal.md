# Proposal

We want to make an Instagram app clone but for pets only. We're going to call it Petstagram, allowing users to post pictures, comment and like eachothers posts about their pets.

# Wireframes

We're going to have App pass down data to the main/homePage component.
We will have a posts component where users can add, edit, or delete posts.
We will also have a comments components where users can add comments or delete comments to posts made by other users.

# Backend Components

For the backend, we will be using Express and MongoDB to make an API that will store posts, comments, pictures and users. The frontend will call the API to retrieve the data and render it on the page.

### Users

The Users model will hold information about the user and will link to the Posts and Comments. The model will contain the user's name and additional information like their pet name, type, breed, etc.

### Posts

The Posts model will hold the information that should be rendered when a user posts something. It will contain text that the user types in when they make a post, pictures that are attached to the post, have a Comments sub-model and link to Users model for that specific user.

### Comments

Comments model will be formatted similarly to the Posts model, containing the text that should render in the comment, the user who posted it and likes.

# User Stories

- As a user, I want to be able to post pictures of my pet.
- As a user, I want to be able to comment on other users' posts.
- As a user, I want to be able to like other users' posts.
- As a user, I want to be able to see a list of all users' posts.
- As a user, I want to be able to see a list of all users' comments.
- As a user, I want to be able to see a list of all users' likes.

# MVP

# Stretch Goals

Once we're done with the user stories, we aim to build user authentication and authorization so users can interect with eachother.
We want to build a sign up, sign in page where users need to sign up first in order to use the app.
We want to build a profile page for each indivudal user.
We want to build a functionality to allow users to delete only their pictures and comments.
