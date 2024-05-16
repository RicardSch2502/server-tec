import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import indexRoute from '@routes/index.route';
import fileUpload from 'express-fileupload';
// import { createTables } from '@models/index';
// createTables();
const stripe = require('stripe')('sk_test_51PGTA0P3QrwGa9Cf2VrDEZWbY9CjQMjro8qMB3PXHgvOpU65KSgxO34t1Cr7BfVT0yp8xfrGeswOkon6XQuX0eiF00yPbl2Oau');
config();

const app = express();
app.set('PORT', process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload()); //Para subir archivos
app.use('/static', express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/api', indexRoute);

app.listen(3000, () => {
  console.log(`App use port ${app.get('PORT')}`);
});
