const express = require("express");

const app = express();
const port = 3000;

let ssoToken = [
    {
        token: "1",
        expiry: "1231230412",
        relm: "pearson"
    }
];

app.get('/token', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Set-Cookie', 'PearsonExtSSOSession=YEDJVw7IP9U6NlWM7M0n4mZBJtU.*AAJTSQACMDIAAlNLABwwYnFDTURqNWlic1dhaW1PTkRNeWkxWkJZa3c9AAR0eXBlAANDVFMAAlMxAAIwNw..*; Domain=vercel.app; Path=/; Secure; HttpOnly; SameSite=none');
    res.json(ssoToken);
});

app.post('/createtoken', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Set-Cookie', 'PearsonExtSSOSession=YEDJVw7IP9U6NlWM7M0n4mZBJtU.*AAJTSQACMDIAAlNLABwwYnFDTURqNWlic1dhaW1PTkRNeWkxWkJZa3c9AAR0eXBlAANDVFMAAlMxAAIwNw..*; Domain=vercel.app; Path=/;  Secure; HttpOnly; SameSite=none');
    res.json(ssoToken);
})

app.listen(port, () => console.log(`Server listening at the port ${port}`));