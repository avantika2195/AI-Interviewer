const { authMiddleware } = require("@clerk/nextjs");

module.exports = authMiddleware({
  publicRoutes: ["/", "/api/webhook(.*)"], // adjust public routes if needed
});

module.exports.config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // protect everything else
};

