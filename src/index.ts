// Load env variables.
import * as dotenv from 'dotenv'
dotenv.config()

// Library imports here
import * as express from 'express';

// Local imports here
import App from './app';

const middlewares = [express.urlencoded({ extended: true }), express.json(),]

const app = new App(middlewares, Number(process.env.APP_PORT));

app.listen();
