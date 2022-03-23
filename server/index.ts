import express from 'express';
import { ppid } from 'process';

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello')
})

app.listen(3001, () => {

    console.log('Server runned!');
    
})