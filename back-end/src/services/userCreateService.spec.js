const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");


describe("UserCreateService", () => {
  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });

  it("should create a user", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "!23456"
    };

    const userCreated = await userCreateService.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("should not create user if email already exists", async () => {
    const user1 = {
      name: "User Test 1",
      email: "user@test.com",
      password: "123456"
    };

    const user2 = {
      name: "User Test 2",
      email: "user@test.com",
      password: "234567"
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Email ja cadastrado"));
  });
})
