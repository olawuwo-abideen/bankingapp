import { Request, Response, NextFunction } from 'express';
import { PaymentService } from '../services/payment-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new PaymentService();
    
    app.get("/payments", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


    }); 


  }