const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()


app.use(cors());
app.use(bodyParser.json());

const users = ['shafayat', 'tazoar', 'afi', 'sadat']

app.get('/', (req, res) => {
    const fruit = {
        product : "mango",
        price: 200
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruit:'banana', price: 200});
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
    // console.log(req.params);
})

//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user)
    //console.log('post request send')
})

app.listen(4200, () => console.log('listening port 4200'))