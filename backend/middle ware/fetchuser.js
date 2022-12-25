const jwt = require("jsonwebtoken");

const fetchUser = async (req, res, next) => {
  try {
    const token = await req.header("auth-token");
    const JWT_secret = "MianIsKING$";
    if (!token) {
      res.status(401).send({ error: "please authenticate with a valid token" });
    } else {
      const data = jwt.verify(token, JWT_secret);
      req.user = data.user;
      next();
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = fetchUser;
