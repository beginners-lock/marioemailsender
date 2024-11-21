import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import bodyParser from 'body-parser';
import { sendOTPemail } from './sendemail.js';

const app = express();
app.use(cors({origin: '*'}));
configDotenv();

const port = process.env.PORT;

app.get('/sendemail', async (req, res) => {
    let emailsuccess = await sendOTPemail('This working', 'Rophi', 'tonyuzoma561@gmail.com');

    if(emailsuccess){
        res.send('success');
    }else{
        res.send('failed');
    }
});

app.listen(3000, ()=>{
    console.log(port);
    console.log(`Express server is listening at http://localhost:${port} 🚀`);
});