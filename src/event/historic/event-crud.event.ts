import { ActionModification } from "src/Domain/Models/Emun/db.enum";
import { Request } from 'express';
export class CrudEvent {
  constructor(
    public readonly req: Request,
    public readonly action: ActionModification,
    public readonly tableName: string,
    public readonly jsonData: string,
  ) {}
}

