# Animefy

Music application similar to spotify.


# structure

1. covers   -stores the covers for the songs
2. res      -the resources such as pics & mp3 songs files
3. frontend -the frontend files including the styling files and JS files
4. backend  -the backend files i.e php files
5. index.html - The login page for animefy

# info
Here I will write how the files and control structure works so that you guys can understand how this web application works.

covers- This directory holds all the song cover pictures or thumbnails.

songs - This directory holds all the songs in mp3 format which are to be played

bg - These files are the background files
\\\\will be stored in the res directory


authentication.php - Authenticate the user i.e. if the user exists then he is taken to his songs page else is taken to the signup page. Also passes the username so that we know which user's page is to be loaded.

connection.php - To setup the connection with the database


about.html - The about page to give credits to myself

logout.php - Simply logouts the user and destroys the session

playing.gif - simpe gif that shows when the music is playing

script.js - The JS script to make the music playable and the user songs page responsive

signup.html - The frontend page for signup

signup.php - To check if the user exists in database or not. Also adds the user in the database if the user is not in the database

style.css - Responsible for the styling of the usersongs.html page

style1.css - Responsible for the styling of the index.html page i.e. the login page

usersongs.html - The frontend page where all the songs for any user are displayed

# How to start

1. Make DB named animefy_db
2. Create table animefy_users
- row creation will be added

Now you can run the app successfully



\ deep info about each page
\ make recruitcrm like ui for songs
\ change background
\ change login and other pages styling
\ merge to make a crud app