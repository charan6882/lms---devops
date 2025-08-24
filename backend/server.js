const express = require('express');
const cors = require('cors');

const app = express();

// Allow frontend on port 3000
app.use(cors({
  origin: "*",   // you can also set: ["http://localhost:3000"]
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "LMS API running 🚀" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
