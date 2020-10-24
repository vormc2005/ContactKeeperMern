const express = require('express');
const connectDB = require('./config/db');
//initialize express
const app = express();

// Connect DB

connectDB();

//Init middlewar
app.use(express.json({extended: false}))

app.get('/', (req, res)=>res.send({msg:'Welcome to the contact keeper API'}))
//Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,  ()=>(console.log(`Server started on port ${PORT}`)))

