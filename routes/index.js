const router = require ("express").Router();
const path = require("path");
const apiRoutes    = require("./api");
const AuthRoutes = require ("./auth/auth")

// API Routes
router.use("/api", apiRoutes);

// Auth Routes
router.post("/signup", AuthRoutes)
router.post('/signin', AuthRoutes)
router.get('/logout', AuthRoutes)
router.get("/auth", AuthRoutes)


router.get('/',function (req, res) {
    console.log("hi___))_(*&^%$%^&*()(*&^%$%^&*(*&^%$%^&*()_)(*&^%$")
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;
