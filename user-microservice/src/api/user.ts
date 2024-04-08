import { Request, Response, NextFunction } from 'express';
import { TransactionService } from '../services/user-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new TransactionService ();
    
    app.post("/register", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.post("/logout", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


}