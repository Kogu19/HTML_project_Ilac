const express = require('express');
const cors = require('cors');
const items = require('./data/items');

const app = express();
const PORT = 3000;

let currentIndex = 0;

app.use(cors());
app.use(express.json());

app.get('/item', (req, res) => {
  res.json({
    currentIndex: currentIndex,
    item: items[currentIndex],
    total: items.length
  });
});

app.get('/item/next', (req, res) => {
  currentIndex = (currentIndex + 1) % items.length;
  res.json({
    currentIndex: currentIndex,
    item: items[currentIndex],
    total: items.length
  });
});

app.get('/item/prev', (req, res) => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  res.json({
    currentIndex: currentIndex,
    item: items[currentIndex],
    total: items.length
  });
});

app.get('/item/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < items.length) {
    res.json({
      currentIndex: id,
      item: items[id],
      total: items.length
    });
  } else {
    res.json({ error: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});