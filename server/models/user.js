let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let UserSchema = Schema({
   username: String,
   email: String,
   displayName: String,
   created: 
   {
        type: Date,
        default: Date.now()
   },
   updated:
   {
       type: Date,
       default: Date.now()
   }
},
{
    collection: 'user_collection'
});


let options = ({missingPasswordError: 'Fill the Password Information'});

UserSchema.plugin(passportLocalMongoose, options);

module.exports.Model = Model('User', UserSchema);