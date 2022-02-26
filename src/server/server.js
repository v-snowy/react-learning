import axios from 'axios';
import compression from 'compression';
import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV === 'development';

const app = express();

if (!IS_DEV) {
  app.use(compression());
}

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${ req.query.code }&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: '6OXW7yPZvv6ky5dxdrxqvD1u9hJFZA' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
      );
    })
    .catch(console.log)
});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
});

app.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${ PORT }`);
});
