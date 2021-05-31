const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    //IMPORTANT: This api key needs to be kept confidential
    console.log('Did you get to your server side router.get?') // testing to see where in route I've working code up to 
    let gitHubKey = process.env.GITHUB_KEY;
    console.log('Did you get the GH key?', github_key);
    axios.get(`https://api.github.com/search/repositories?GH_KEY=${gitHubKey}`)
        .then(response => {
            console.log('This is the response from the search query:', response);
            // response.data is the info or data part of the axios response.
            // GitHub should also send stuff in data
            res.send(response.data.data);
        })
        .catch(error => {
            console.log('Error getting search GitHub search api', error);
            res.sendStatus(500);
        })
})


module.exports = router;