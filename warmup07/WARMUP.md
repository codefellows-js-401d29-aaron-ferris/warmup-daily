Build an express web server. From Scratch. By Hand.
Listens on process.env.PORT
Serves static files from a folder called ./public
Has a separate routes.js file for serving custom routes
handles a GET on ‘/’ with a simple response of ‘hello’
handles a POST on ‘/save’ with a JSON response containing the data posted to the server
Handles 404’s by serving the usera a custom page (.ejs)
Handles Errors by serving the user a custom page (.ejs)
log the actual error to the console
Deploy to Heroku, via your master branch