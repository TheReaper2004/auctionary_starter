const express = require("express"); 
const app = express();

// Define a port for this app to run on
const port = 3000;

app.post("/users")




//make sure the app can be accessed
app.listen(port, () => {  
  console.log("App is listing on port");
});

