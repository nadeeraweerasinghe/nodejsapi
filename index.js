const express = require("express");
var cors = require('cors');

const app = express();
const port = 3000;
var allowedOrigins = ['https://local.poc.io',
                      'https://nadeeraweerasinghe.github.io'];app.use(cors({
    credentials: true,
  origin: function(origin, callback){    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }    return callback(null, true);
  }
}));

let ssoToken = [
    {
        token: "1",
        expiry: "1231230412",
        relm: "pearson"
    }
];

app.get('/token', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Set-Cookie', 'PearsonExtSSOSession=YEDJVw7IP9U6NlWM7M0n4mZBJtU.*AAJTSQACMDIAAlNLABwwYnFDTURqNWlic1dhaW1PTkRNeWkxWkJZa3c9AAR0eXBlAANDVFMAAlMxAAIwNw..*; Domain=.vercel.app; Path=/; Secure; HttpOnly; SameSite=none');
    res.json(ssoToken);
});

app.post('/authenticate', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Set-Cookie', 'PearsonExtSSOSession=YEDJVw7IP9U6NlWM7M0n4mZBJtU.*AAJTSQACMDIAAlNLABwwYnFDTURqNWlic1dhaW1PTkRNeWkxWkJZa3c9AAR0eXBlAANDVFMAAlMxAAIwNw..*; Domain=.vercel.app; Path=/;  Secure; HttpOnly; SameSite=none');
    res.json(ssoToken);
})

app.listen(port, () => console.log(`Server listening at the port ${port}`));