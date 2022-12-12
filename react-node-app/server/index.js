// server/index.js

// Express GET nad POST request handling
const express = require('express');
const app = express();

// Requiring https for creating https server
const https = require('https');

// Requiring file system to use local files
const fs = require('fs');

// Parsing the form of body to take input from forms
const bodyParser = require("body-parser");

// Configuring Express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Requiring Node-Fetch for Alloy APIs
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

/* Alloy GET
const url = 'https://sandbox.alloy.co/v1/parameters';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: '<encoded token:secret>',
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
*/

const httpsOptions = {
  /*key: fs.readFileSync(path.join('./', 'cert', 'server.key')),
    cert: fs.readFileSync(path.join('./', 'cert', 'server.cert')),*/
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.cert')
}

// Create a NodeJS HTTPS listener on port 3001 that points to the Express app
// Use a callback function to tell when the server is created.
https
  .createServer(httpsOptions, app)
  .listen(PORT, () => {
    console.log(`server is runing at https://localhost:${PORT}`)
  });

// Create an entry point route for the Express app listening on port 3001.
// This code tells the service to listen to any request coming to the /express_backend route.
// Once the request is received, it will display a message "Hello from express server."
app.get('/express_backend', (req,res) => {
  res.send("Hello from express server.")
})

// Alloy POST
app.post('/form_submit', (req,res) => {
  console.log(req.body);
  console.log(JSON.stringify(req.body))

  const url = 'https://sandbox.alloy.co/v1/evaluations';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      //authorization: '<encoded token:secret>',
    },
    body: JSON.stringify(req.body),
  };

  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not OK');
      }
      return res.json();
    })
    .then((data) => {
      if (data.summary.outcome === 'Approved') {
        res.send('Congratulations! Your application was successfully submitted and approved!')
      } else if (data.summary.outcome === 'Denied') {
        res.send('Sorry, your application was not successful.')
      } else res.send('Thanks for submitting your application, we\’ll be in touch soon!')
    })
    .catch((err) => {
      console.error(`There has been a problem with your fetch operation: ${err}`);
    });
});