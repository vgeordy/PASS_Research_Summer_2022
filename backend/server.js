const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.statusCode(200);
})

certificates = [];

app.post("/", (req, res) => {
    certificate = {
        issuer: req.body.issuer,
        holder: req.body.holder,
        certificate: req.body.certificate,
        pub_signature: req.body.pub_signature
    }

    certificates.push(ceritificate);
    res.redirect("/")
    

})


app.listen(5000)