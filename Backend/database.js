// Here we are creating the new database
const mongoose = require('mongoose');
// Defining the mongo connect URL
const connectionURL = 'mongodb+srv://guptaayushman24:neOb6dYAi0URSyPh@clusterwallet.xl5rp8w.mongodb.net/?retryWrites=true&w=majority&appName=Clusterwallet'
// Now we will establish the connection
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
// Connect
const database = mongoose.connection;
// Adding the event listner
database.on('connected',()=>{
    console.log('Connected to Mongodb server')
})
database.on('error',(err)=>{

    console.log('Error in connected to Mongodb server',err);
})
// Export the mongodb connection
module.exports = database;