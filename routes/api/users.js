const express = require('express');
const router = express.Router();

// @route GET api/users/test
// @desc Tests users route
// @access Public

router.get('/test', (req, res) =>res.json({
    msg: "Users Works"
}));



router.post('/register', (req, res)=> {
    User.findOne({email: req.body.email})
});

module.exports = router;



//fordailyact
// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
  );
  
  module.exports = router;