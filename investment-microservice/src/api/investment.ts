import { Request, Response, NextFunction } from 'express';
import { InvestmentService } from '../services/investment-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new InvestmentService();
    
    app.get("/portfolio", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.post("/portfolio/transaction", async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        next(error);
      }
  });
  app.post("/portfolio/assets", async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
});

  }