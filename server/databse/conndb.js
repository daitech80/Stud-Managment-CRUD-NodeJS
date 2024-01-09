const mongoose = require('mongoose');
const connode = async () => {


        // mongodb connection string
        mongoose.connect('mongodb://localhost:27017/studcrud') //
        .then(() => console.log('connected to mangodb'))
        .catch(err => console.error('could not connnected '));
        
}
module.exports = connode