const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class DishesController {
  async create(request, response) {
    const {title, description, category, price, ingredients} = request.body;
    const user_id = request.user.id;

    const [dish_id] = await knex("dishes").insert({ 
      title, 
      description,
      category, 
      price,
      user_id
    })

    const dishCreated = await knex("dishes").where({ id: dish_id }).first();

    const ingredientsInsert = ingredients.map(name => {
      return {
        dish_id,
        name,
        user_id
      }
    })
    await knex("ingredients").insert(ingredientsInsert)

    return response.json(dishCreated);
  }

  async show(request, response) {
    const {id} = request.params;

    const dish = await knex("dishes").where({id}).first();
    const ingredients = await knex("ingredients").where({dish_id: id}).orderBy("name")

    return response.json({
      ...dish,
      ingredients
    })
  }

  async delete(request, response) {
    const {id} = request.params;

    await knex("dishes").where({id}).delete()

    return response.json()
  }

  async index(request, response) {
    const {title, ingredients} = request.query;
    const user_id = request.user.id;

    let dishes;

    if(ingredients){
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());
      
      dishes = await knex("ingredients")
        .select(["dishes.id", "dishes.title", /*"dishes.description", "dishes.price",*/ "dishes.user_id"])
        .where("dishes.user_id", user_id)
        .whereLike("dishes.title", `%${title}%`)
        .whereIn("name", filterIngredients)
        .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
        .orderBy("dishes.title")

    } else {
      dishes = await knex("dishes")
        .where({user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userIngredients = await knex("ingredients").where({user_id});
    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredients = userIngredients.filter(ingredient => ingredient.dish_id === dish.id).map(ingredient => ingredient.name)

      return {
        ...dish,
        ingredients: dishIngredients
      }
    })

    return response.json(dishesWithIngredients)
  }

  async update(request, response){
    const {title, description, category, price, ingredients} = request.body; 
    const user_id = request.user.id;
    const {id} = request.params;

    // Verificar se já existe um prato com o mesmo título, excluindo o prato atual
    const existingDish = await knex("dishes")
    .where({title})
    .whereNot({id})
    .first()
    
    if(existingDish) {
      throw new AppError("Prato ja cadastrado");
    }

    const dish = await knex("dishes").where({id}).first();

    if (!dish) {
      throw new AppError("Prato não encontrado");
    } 

    dish.title = title ?? dish.title;
    dish.description = description ?? dish.description;
    dish.category = category ?? dish.category;
    dish.price = price ?? dish.price;

    //Confirmar que todos os campos estao preenchidos
    if(title === null || description === null || category === null || price === null){
      throw new AppError("Todos os campos devem ser preenchidos")
    }

    // Atualizar o prato no banco de dados
    await knex("dishes").where({ id }).update(dish);

    if(!ingredients){
      throw new AppError("Favor confirmar os ingredientes")
    }

    // Adicionar user_id aos ingredientes antes de atualizar
    const ingredientsWithUserId = ingredients.map(ingredient => ({ dish_id: id, user_id, name: ingredient }));

    await knex("ingredients").where({ dish_id: id }).del(); // Excluir os ingredientes existentes
    await knex("ingredients").insert(ingredientsWithUserId);

    const updatedDish = await knex("dishes").where({ id }).first();

    return response.json({ dish: updatedDish });
  }
}

module.exports = DishesController;