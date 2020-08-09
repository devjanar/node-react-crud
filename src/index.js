import express from 'express'
import mongoose from 'mongoose';
const bodyParser=require("body-parser");
import proxy from 'express-http-proxy'
// import Port
import {port} from './helpers/envPort'
// import Router
import _todo from '../routes/router'
//Layout
import layout from './helpers/index'

/* Use Public Folder */
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// db
mongoose
    .connect("mongodb://localhost:27017/todo",
        { useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true  
        })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log(err);
    });
//
//API
app.use('/api', proxy(`http://localhost:${port}`,{
    proxyReqOptDecorator(opts){
            opts.headers['x-forwarded-host']=`localhost:${port}`;
            return opts;
        }
    }
));
//
app.use('/todo', _todo);
//
app.use('/', (req, res) => {
    res.send(layout())
});
app.listen(port, () =>{
    console.log(`App listening on port ${port}!`)
});