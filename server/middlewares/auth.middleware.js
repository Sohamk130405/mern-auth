const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const BlackListToken = require("../models/blackListToken.model");

module.exports = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access." });
  }

  const isBlacklisted = await BlackListToken.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized Access." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized Access." });
  }
};
