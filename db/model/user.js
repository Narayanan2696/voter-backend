const mongoose = require('mongoose');
const Types = mongoose.Schema.Types

mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
  email: {
    type: Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Types.String,
  },
  name: {
    type: Types.String
  },
  phone: {
    type: Types.String
  },
  voterId: {
    type: Types.String,
    unique: true,
  },
},
{
  timestamps: true
}
);

module.exports = mongoose.model('User', userSchema);