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
    res.json(ssoToken)
});

app.post('/createtoken', (req, res) => {
    let options = {
        maxAge: 1000 * 60 * 15,
        httpOnly: true
    };
    res.cookie('token', '12345', )
    res.json(ssoToken);
})

app.listen(port, () => console.log(`Server listening at the port ${port}`));