const router = require("express").Router();

const ProblemRoutes  = require("./problem");

router.use("/problem", ProblemRoutes);


module.exports = router;