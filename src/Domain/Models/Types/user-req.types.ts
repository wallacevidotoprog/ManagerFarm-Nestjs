import { Role } from "src/Domain/Models/Emun/db.enum";

export type UserRequest = {
  sub: string;
  email: string;
  role: Role;
  propertyId:string;
};
