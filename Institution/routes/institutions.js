const { Router } = require('express')
const express = require('express');
const { emitWarning } = require('process');
const router = express.Router()
const cors = require('cors');
const axios = require("axios");
const bodyParser = require('body-parser');
const fs = require('fs');


router.use(bodyParser.json());
router.use(cors());




// router.get("/success",  (req, res) => {

//     res.set({
//             'Location': "http://localhost:3000/PACreation/"
//         });
//         res.download("mercy-certificate.json");
//     });


router.get("/mercycollege", cors(),  (req, res) => {

    res.render('index');
})


router.post("/mercycollege", (req, res) => {
    

        const certificate = {
            wid: req.body.wid,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            subject: "Diploma",
            digitalSignature: "mercy-college-signature",

        };
        console.log(certificate)
        const randId = idGenerator();
        const json_file = JSON.stringify(certificate);
        fs.writeFileSync(`mercy-certificate_${randId}.json`, json_file);
        res.download(`mercy-certificate_${randId}.json`);
        
        
})


// router.post("/", (req, res) => {
//     information.push(req.body);
//     console.log(information);
    
//     if(isValid()) {
//         res.redirect("/");
//     }else {
//         console.log("error");
//         res.sendStatus(400);
//     }
    

// })

const isValid = () => {
    return true;
}

const idGenerator = () => {
    return Math.floor(Math.random() * 1000);

}


module.exports = router