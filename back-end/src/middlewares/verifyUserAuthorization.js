const AppError = require("../utils/AppError")

function verifyUserAuthorization(verifyRole){
  return (request, response, next) => {
    const {role} = request.user;

    if(role != verifyRole) {
      throw new AppError("Unauthorized", 401)
    }

    return next();
  }
}

module.exports = verifyUserAuthorization;