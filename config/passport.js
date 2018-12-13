const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opt = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secertOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_paload, done) => {
        console.log(jwt_payload);
    }))
};
