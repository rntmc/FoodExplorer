const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository){
    this.userRepository = userRepository;
  }
  
  async execute({ name, email, password }){
    const checkUserExist = await this.userRepository.findByEmail(email)

    if(checkUserExist){
      throw new AppError("Email ja cadastrado")
    }

    if(password.length < 6) {
      throw new AppError("A senha deve ter no mínimo 6 caracteres")
    }

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({name, email, password: hashedPassword})

    return userCreated;
  } 
}

module.exports = UserCreateService;