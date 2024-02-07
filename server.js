// express the routes
const express = require('express');
//route fi;es
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001;
// The app uses express
const app = express();

//  This express to public index and notes html
app.use(express.static("public"));
// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(htmlRoutes)
app.use(apiRoutes)
// This starts the app to begin and listen to the server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
