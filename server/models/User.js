const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const cardSchema = require('./Card');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    deck: {
      type: Schema.Types.ObjectId,
      trim: true,
      ref: "Deck" 
    }
  }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
    //   saltRounds is used to strengthen security
        const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  // custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  // when we query a user, we'll also get another field called `cardCount` with the number of saved cards we have
userSchema.virtual('cardCount').get(function () {
    return this.Collection.length;
  });
  
const User = model('User', userSchema);

module.exports = User;