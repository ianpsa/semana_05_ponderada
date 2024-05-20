module.exports.security = {
  cors: {
    allRoutes: true,
    allowOrigins: '*',
    allowCredentials: false,
    allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowRequestHeaders: 'content-type, Authorization'
  }
  //csrf: true
};
