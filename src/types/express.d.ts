import { Request } from 'express';
import {UserRequest} from 'src/Domain/Models/Types/user-req.types'
declare global {
  namespace Express {
    interface Request {
      user?: UserRequest; 
    }
  }
}