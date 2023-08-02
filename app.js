const express = require('express');
const axios = require('axios');
const app = express();

const API_URL = 'https://icanhazdadjoke.com/';

app.use(express.static('public'));

app.get('/get-joke', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Accept: 'application/json' },
    });
    const joke = response.data.joke;
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dad joke.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

