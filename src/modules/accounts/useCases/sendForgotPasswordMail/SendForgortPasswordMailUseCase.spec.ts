import { AppError } from "../../../../errors/AppError";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "../../repositories/in-memory/UsersTokensRepositoryInMemory";
import { SendForgotPassowordMailUseCase } from "./SendForgotPassowordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPassowordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPassowordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendEmail");

    await usersRepositoryInMemory.create({
      driver_license: "125631",
      email: "rocketseat@rentx.com",
      name: "test",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("rocketseat@rentx.com");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("asd@aghas.com")
    ).rejects.toEqual(new AppError("User does not exists"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    usersRepositoryInMemory.create({
      driver_license: "125631",
      email: "rentx@rentx.com",
      name: "test1",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("rentx@rentx.com");

    expect(generateTokenMail).toBeCalled();
  });
});
