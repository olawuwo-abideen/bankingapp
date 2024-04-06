import { Request, Response, NextFunction } from 'express';
import { SupportService } from '../services/support-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new SupportService ();
    
    app.get("/tickets", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


    app.get("/branches", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.get("chat", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.get("settings", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


    app.get("contact", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 



  }