const express = require('express');
const app = express();
const PORT = 127;

let messages = [];

app.use(express.static('public'));
app.use(express.json());

app.post('/message', (req, res) => {
    const { text } = req.body;
    if (text && text.trim() !== '') {
        messages.push(text);
        res.json({ success: true });
    } else {
        res.json({ success: false, error: "Empty message" });
    }
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT});
});
