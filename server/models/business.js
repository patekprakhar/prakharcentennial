let mongoose = require('mongoose');
let Schema = mongoose.Schema; 
let Model = mongoose.model; 

let BusinessSchema = new Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: 'user_collection'
});

module.exports.Model = Model('Business', BusinessSchema);