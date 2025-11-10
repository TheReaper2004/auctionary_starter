const express = require("express"); 
const app = express();

// Define a port for this app to run on
const port = 3000;

//a simple route to check it works!
app.get("/", (req, res) => { 
  res.send("Hello, World!");
});

//make sure the app can be accessed
app.listen(port, () => {  
  console.log("App is listing on port");
});

