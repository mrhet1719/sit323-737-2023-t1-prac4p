const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input');
  } else {
    const result = Number(num1) + Number(num2);
    res.send({ result });
  }
});

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input');
  } else {
    const result = Number(num1) - Number(num2);
    res.send({ result });
  }
});

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input');
  } else {
    const result = Number(num1) * Number(num2);
    res.send({ result });
  }
});

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2) || Number(num2) === 0) {
    res.status(400).send('Invalid input');
  } else {
    const result = Number(num1) / Number(num2);
    res.send({ result });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
