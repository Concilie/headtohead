const express = require('express');
const router = express.Router();
const axios = require('axios')

const data = require('../headtohead.json');

router.get('/', (req, res) => {
    res.json(data)
})


router.get('/:id', (req, res) => {
  
    const player = data.players.find(player => player.id == Number(req.params.id))
    if(!player)
    return res.status(400).send('No player matching')

    res.json(player)
})


router.get('/from/axios', async (req, res) => {
    const result = await axios.get('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json')
    const players = result.data;

    if(!players) 
    return res.status(400).send('Not found')
    res.json(players)
})



module.exports = router;