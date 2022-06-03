const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.token;

    if (authHeader) {
      jwt.verify(authHeader, process.env.JWT_SECRET, (error, user) => {
        if (error) res.status(403).json("Token is not valid");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not auntificated");
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("user: " + req.user.id);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  try {
    verifyToken(req, res, () => {
      console.log("admin test: " + req.user.isAdmin);
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
};
