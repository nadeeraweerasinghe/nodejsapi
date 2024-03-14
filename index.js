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
                'allow access from the specified Origin- ' + origin;
      return callback(new Error(msg), false);
    }    return callback(null, true);
  }
}));

//app.use('/.well-known', express.static('.well-known'))

let ssoToken = [
    {
        token: "1",
        expiry: "1231230412",
        relm: "pearson"
    }
];

let rws = {
  "contact": "nadeerax@gmail.com",
  "primary": "https://nodejsapi1.vercel.app",
  "associatedSites": [
     "https://ngwebsite2.tiiny.site",
     "https://local.com.au"
  ],
  "rationaleBySite": {
     "https://ngwebsite2.tiiny.site": "Testing how to calll https://nodejsapi1.vercel.app to create an authentication cookie from https://ngwebsite2.tiiny.site",
     "https://local.com.au": "Testing how to calll https://nodejsapi1.vercel.app to create an authentication cookie from https://local.com.au"
  }
}; 

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

app.get('/.well-known/related-website-set.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(rws);
});

app.listen(port, () => console.log(`Server listening at the port ${port}`));