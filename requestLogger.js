const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${timestamp}] ${method} ${url} - Status: ${res.statusCode} - Time: ${duration}ms`
    );
  });

  next();
};

module.exports = requestLogger;
