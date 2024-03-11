import MyApp from "./config/server";

import {config} from 'dotenv';
config();

const myApp = new MyApp();
myApp.start();
