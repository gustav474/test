/**
 * Created by gusta on 19.04.2017.
 */
// grab the things we need
var mongoose = require('mongoose');
const serverIP = '62.109.2.55';

mongoose.connect('mongodb://' + this.serverIP + '/test/');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// console.log(User.find({}, (err, users) => {
//   if (err) throw err;
//   console.log(users[2]);
//   }));

// make this available to our users in our Node applications
module.exports = User;
