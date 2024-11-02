const UserDash = require("../models/userDash.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = await UserDash.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "email does not exist",
      });
    }

    const comparedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparedPassword) {
      return res.status(404).json({
        message: "email or password is incorrect",
      });
    }

    const auth_dashboard_token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "5d",
      }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({
      message: "Login successful",
      data: { ...info, auth_dashboard_token },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Login failed",
      error: err,
    });
  }
};

module.exports = {
  login,
};
