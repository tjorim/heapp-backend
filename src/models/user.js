const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
});

userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({
      email: login,
    });
  }

  return user;
};

userSchema.pre('remove', function (next) {
  this.model('Message').deleteMany({
    user: this._id,
  }, next);
});

const User = mongoose.model('User', userSchema);

export default User;

// mongoose.connect(process.env.DATABASE, { useMongoClient: true });
// mongoose.Promise = global.Promise;
// mongoose.connection
//   .on('connected', () => {
//     console.log(`Mongoose connection open on ${process.env.DATABASE}`);
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });
