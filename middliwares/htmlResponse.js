function htmlResponse(tittle) {
    return function (req, res, next) {
      res.locals.html = true;
      res.locals.tittle = `${tittle} - ${process.env.APP_NAME}`;
      next();
    };
  }
  
  module.exports = htmlResponse;