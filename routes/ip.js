const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:gamertag', async (req, res) => {
  try {
    
    const { gamertag } = req.params;

    const response = await fetch(
      `${process.env.GEOIP_API_URL}/${gamertag}`
      
    );
 
    
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: 'IP Not Found'
      });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
});

module.exports = router;
