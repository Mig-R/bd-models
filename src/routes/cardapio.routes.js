const express = require('express');
const router = express.Router();
const Cardapio = require('../models/cardapio')

router.post('/' , async (req , res) => {
    try{
        const cardapio = await new Cardapio(req.body).save();
        res.json({cardapio});

    } catch (err) {
        res.json({ error: true, message: err.message})
    }
});


module.exports = router;