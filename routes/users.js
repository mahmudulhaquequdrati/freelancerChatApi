const User = require("../models/User");
const router = require("express").Router();

router.get("/:userEmail", async (req, res) => {
  try {
    const userEmail = req.params.userEmail;
    const user = await User.find({ email: userEmail });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
