const router = require("express").Router();
const passport = require('passport');

// =====================================
// LOGIN ===============================
// =====================================

// process the login form
router.post('/signin', (req, res, next) => {
  passportAuthenticate('local-login', req, res, next);
});

// =====================================
// SIGNUP ==============================
// =====================================

// process the signup form
router.post('/signup', (req, res, next) => {
  console.log("signup", req)
  passportAuthenticate('local-signup', req, res, next);

});

// =====================================
// passport local strategy =============
// =====================================
passportAuthenticate = (localStrategy, req, res, next) => {
  passport.authenticate(localStrategy, (err, user, info) => {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: info });
    }
    else {
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        res.cookie('user_email', user.email);
        res.cookie('authenticated', "true");
        return res.json({ success: true });
      });
    }
  })(req, res, next);
}

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) throw err
    req.logout();
    res.clearCookie("user_sid");
    res.clearCookie("user_email");
    res.clearCookie("authenticated");
    let auth = req.isAuthenticated();
    console.log("auth", auth)
    res.json(req.isAuthenticated());
  });
});

// =====================================
// Auth Validation =====================
// =====================================
router.get('/auth', (req, res) => {
  let auth = req.isAuthenticated();
  console.log("auth", auth)
  res.send(auth);
});

module.exports = router;