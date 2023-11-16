// server.js
const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const data = [
    {
      "id": 1,
      "location": "San Francisco",
      "time": "1552657573",
      "author": "Happy User",
      "text": "Proper PDF conversion ensures that every element of your document remains just as you left it."
    },
    {
      "id": 2,
      "location": "San Francisco",
      "time": "1552571173",
      "author": "Happy User",
      "text": "The modern workplace is increasingly digital, and workflows are constantly evolving."
    },
    {
      "id": 3,
      "location": "San Francisco",
      "time": "1552571174",
      "author": "Happy Developer",
      "text": "Digital transformation isn't just a buzzword"
    },
    {
      "id": 4,
      "location": "Sydney",
      "time": "1552563973",
      "author": "Happy Developer",
      "text": "An expectation of digital efficiency has become the norm in our daily lives"
    },
    {
      "id": 5,
      "location": "Sydney",
      "time": "1668529943",
      "author": "Happy Developer",
      "text": "Another Week"
    },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} ${config.apiKey}`);
});