import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const server = http.createServer(app);
const PUBLIC_FOLDER = path.join(__dirname, `../../build`);
const IS_PRODUCTION = process.env.NODE_ENV === `production`;

app.use(cors());
app.set(`port`, 8002);
app.use(express.static(PUBLIC_FOLDER));
app.set(`views`, PUBLIC_FOLDER);
app.engine(`html`, require(`ejs`).renderFile);
app.set(`view engine`, `html`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(`/status`, (req, res) => {
  res.json({ status: `ok` });
});

app.post(`/login`, (req, res) => {
  console.log(`Data >> `, req.body);
  res.sendStatus(202);
});

if (IS_PRODUCTION) {
  app.get(`/`, (req, res) => {
    res.render(`index.html`);
  });
}

server.listen(app.get(`port`), () => {
  console.log(`Server connected successfully on port: ${app.get(`port`)} :D`);
});
