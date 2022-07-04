import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForgotPassowordMailUseCase } from "./SendForgotPassowordMailUseCase";

class SendForgotPassowordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordMailUseCase = container.resolve(
      SendForgotPassowordMailUseCase
    );

    await sendForgotPasswordMailUseCase.execute(email);

    return response.send();
  }
}

export { SendForgotPassowordMailController };
