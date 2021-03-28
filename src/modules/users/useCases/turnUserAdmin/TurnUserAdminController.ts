import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.turnUserAdminUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: `${error.message}` });
    }

    return response.status(204).send();
  }
}

export { TurnUserAdminController };
