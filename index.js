
const express = require('express');
const app = express();

app.use(express.json());

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

// Server status
app.get('/', (req, res) => {
    res.json({
        status: 'online',
        server: 'GANESH MODS'
    });
});

// Login API
app.post('/api/login', (req, res) => {
    const { u, p, dev, ver } = req.body || {};

    if (!u || !p) {
        return res.status(400).json({
            ok: false,
            message: 'Missing username or password'
        });
    }

    if (
        u === ADMIN_USER &&
        p === ADMIN_PASS
    ) {
        console.log('Login successful:', dev, ver);

        return res.status(200).json({
            ok: true
        });
    }

    console.log('Login failed:', u);

    return res.status(401).json({
        ok: false
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('GANESH MODS SERVER RUNNING');
});
            
