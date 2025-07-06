const express = require('express');
const app = express();
const port = 3000;
const { normalizeAmharicText } = require('./normalizer.js')

app.use(express.json());

app.post('/normalize', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Missing text' })
    }

    const normalized = normalizeAmharicText(text);
    res.json({ original: text, normalized });
});

app.listen(port, () => {
    console.log("Amharic Search Helper running at port :", port);
})