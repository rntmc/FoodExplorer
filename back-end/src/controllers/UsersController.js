const {hash, compare} = require("bcryptjs")
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create (request, response) {
    const {name, email, password} = request.body;

    const database = await sqliteConnection();
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExist){
      throw new AppError("Email ja cadastrado")
    }

    const hashedPassword = await hash(password, 8);

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

    return response.status(201).json()
  }

  async update(request, response) { //remove this controller
    const {name, email, password, old_password} = request.body;
    // const {id} = request.params - nao precisa pois tem o id do usuario incorporado na requisicao - middleware(user_id)
    const user_id = request.user.id; //conforme comentario acima

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);//mudou [id] para [user_id] conforme comentario acima

    if(!user) {
      throw new AppError("Usuario nao encontrado");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este email ja esta em uso");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    //Caso nova quanto antiga senha nao foram informadas
    if(password && !old_password){
      throw new AppError("Favor confirmar senha antiga")
    }

    // comparar senhas
    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError("A senha antiga nao confere")
      }
      //se tudo ok, atualiza senha
      user.password = await hash(password, 8)
    }

    await database.run(`UPDATE users SET name = ?, email = ?, password =  ?, updated_at = DATETIME('now') WHERE id = ?`, [user.name, user.email, user.password, user_id]); //mudou id para user_id conforme comentario no inicio

    return response.json();
  }
}

module.exports = UsersController