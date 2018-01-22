import * as express from 'express';
const App = express();

App.get('/', (req, res) => {
  res.send('Hello World!');
});

App.listen(3000, () => {
  console.log('Server is listening on Port 3000');
});