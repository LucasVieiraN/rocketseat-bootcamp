import { Router } from "express";

import { ResetPasswordUserController } from "../modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPassowordMailController } from "../modules/accounts/useCases/sendForgotPasswordMail/SendForgotPassowordMailController";

const passwordRouter = Router();

const sendForgotPassowrdMailController =
  new SendForgotPassowordMailController();

const resetPasswordController = new ResetPasswordUserController();

passwordRouter.post("/forgot", sendForgotPassowrdMailController.handle);
passwordRouter.post("/reset", resetPasswordController.handle);

export { passwordRouter };
