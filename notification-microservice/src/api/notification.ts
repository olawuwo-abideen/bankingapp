import { Request, Response, NextFunction } from 'express';
import { NotificationService } from '../services/notification-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new NotificationService();
    
    app.post("/notification/sendEmail", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.post("/notification/sendsms", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


  }