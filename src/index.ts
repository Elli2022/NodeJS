import * as dotenv from "dotenv";
dotenv.config()

import * as express from "express";
import helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';


const app = express();
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

app.use(helmet());
app.options('*', cors({credentials: true, origin: true}));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// inom res.json({ data: så kan vi "scrapa " en sida och lägga in vilken information som vi vill


app.get('/hora',(req, res) =>  res.json({ data:    
    'fuck dettta jävla skit'
})  );
    
    app.listen(port, hostname, () => {    
         console.log(`[EXPRESS] Server running at http://${hostname}: ${port}/`) })