const jwt = require("jsonwebtoken");

const authenticationMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  token = token.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }
  next();
};

module.exports = { authenticationMiddleware };
