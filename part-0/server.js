import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('exercise_0_1.html', { root: './public' });
})

app.get('/linked_element', (req, res) => {
  res.send('Nothing to see here.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
