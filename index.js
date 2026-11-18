
const express = require('express');
const app = express();

app.use(express.json());

const USERS = {
    "admin": "12345"
};

app.post('/api/login', (req, res) => {

    const { u, p, dev, ver } = req.body;

    console.log("Login request received");
    console.log("Device:", dev);
    console.log("Android:", ver);

    if (
        USERS[u] &&
        USERS[u] === p
    ) {
        return res.status(200).json({
            ok: true
        });
    }

    return res.status(401).json({
        ok: false,
        message: "Invalid credentials"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
