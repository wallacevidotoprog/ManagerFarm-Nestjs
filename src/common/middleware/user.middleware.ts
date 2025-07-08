// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class UserMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     const user = req.; // Agora tipado corretamente
//     if (user) {
//       req.userId = user.id; // Sem erro de tipo
//     }
//     next();
//   }
// }