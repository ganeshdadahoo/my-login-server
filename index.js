const express = require('express');
const app = express();
app.use(express.json());

const USERS = {
  "admin": "12345"
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (USERS[username] && USERS[username] === password) {
    return res.status(200).json({ status: "success", message: "Login successful" });
  }

  return res.status(401).json({ status: "error", message: "Invalid credentials" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
