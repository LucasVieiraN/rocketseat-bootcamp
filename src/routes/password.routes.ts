import { Router } from "express";

import { SendForgotPassowordMailController } from "../modules/accounts/useCases/sendForgotPasswordMail/SendForgotPassowordMailController";

const passwordRouter = Router();

const sendForgotPassowrdMailController =
  new SendForgotPassowordMailController();

passwordRouter.post("/forgot", sendForgotPassowrdMailController.handle);

export { passwordRouter };
