const router = require ("express").Router();

const apiRoutes    = require("./api");
const AuthRoutes = require ("./auth/auth")

// API Routes
router.use("/api", apiRoutes);

// Auth Routes
router.post("/signup", AuthRoutes)
router.post('/signin', AuthRoutes)
router.get('/logout', AuthRoutes)
router.get("/auth", AuthRoutes)





module.exports = router;
