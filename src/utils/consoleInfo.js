const infoBeginOfRequest = (req, res, next) => {
  const date = new Date().toLocaleTimeString();
  console.log(
    "\x1b[35m%s\x1b[0m",
    `[info] ${date}: ${req.method} ${req.originalUrl}`
  );
  next();
};

const infoDB = (message) => {
  console.log("\x1b[44m%s\x1b[0m", `[db]:     📚 ${message} 📚`);
};


module.exports = {
  infoBeginOfRequest,
  infoDB
};