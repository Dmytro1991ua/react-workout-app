const asyncHandler = require("express-async-handler");

const admin = require("../config/firebase.config");

const checkAuth = asyncHandler(async (req, res, next) => {
  let token;

  if (req?.headers?.authorization && req?.headers?.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedIdToken = await admin.auth.verifyIdToken(token);

      req.currentUser = decodedIdToken;

      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { checkAuth };
