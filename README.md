# Namaste NetFlix => tmdb API will not work in JIO connection, either use VPN or have other connection.

     - Create React App
     - Configured TailwindCSS
     - Created public and private folder 
     - Created login, header, body components
     - Set up Routing using react-router-dom
     - Import React Provider and pass appRouter to it.
     - Header Completed
     - Sign In Form
     - Sign Up Form
     - Form Validation
     - useRef Hook
     - Created a Project in Google Firebase (Using this for Authentication).
     - Created a firebase configurations file inside utils
     - Enable Email/Password from firebase console
     - Login Firebase from terminal 
     - npm run build to build our project
     - Initialize Firebase using command => firebase login ==> firebase init ==> firebase deploy
     - Project deployed
     - import getAuth from firebase docs.
     - Implemented Sign Up user account
     - Implemented Sign In user account
     - Set Up a Redux store using (npm i -D @reduxjs/toolkit  &&  npm i react-redux)
     - Implemented store and userSlice file
     - Provide store to route of App.
     - User can now login and will be redirected to stream page.
     - Install flaticons
     - Implemented Sign out user 
     - Implemented update profile
     - Bug Fix: If user is not logged in redirect to login page and if user loggedin redirect to stream page everytime.
     - Unsubscribed to onAuthStateChanged callback.
     - Register TMDB API & create an app & get access token
     - Get data from TMDB now playing movies list API
     - add movie data in moviesSlice in redux store
     - Created a custom hook "useNowPlayingMovies" and call API from there.
     - created movieSlice
     - Updated the store with movies data
     - planning for man and secondary container
     - Fetch Data for trailer video data
     - Update store with trailer video data
     - Embedded the youtube video and make it autoplay and mute
     - Tailwind classes to make main container look good
     - Creating Movies suggestions list





# Features
     - Home Page
     - LogIn / SignUp Page
          - Sign In/ Sign Up Form
          - Redirect to Browse Page after LogIn
     - Browse Page ( After Authentication)
          - Header
          - Main Movie
               - Trailer in Background
               - Title & Description
               - Movie Suggestions
                    - MovieList * N
     - NetflixGPT
          - Search Bar
          - Movie Suggestions