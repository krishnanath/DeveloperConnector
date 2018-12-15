const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys"); 

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secertOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_paload, done) => {
     User.findById(jwt_paload.id)
     .then(user => {
         if(user){
             return done(null, user);


         }
         return done(null, false);

     })
     .catch(err => console.log(err));
    }));
};
