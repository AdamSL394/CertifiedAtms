const router = require("express").Router();
const problem = require("../../controllers/problem-controller");

router.route("/")
  .post(problem.create);

  module.exports = router;