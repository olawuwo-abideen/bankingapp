import { Request, Response, NextFunction } from 'express';
import { SupportService } from '../services/support-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new SupportService ();
    
    app.post("/support/ticket", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


    app.get("/support/ticket", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.post("/support/chat", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.get("/support/chat", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 


    app.get("/support/settings", async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
          next(error);
        }
    }); 

    app.post("/support/branches", async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        next(error);
      }
  }); 


  app.post("/support/branches", async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        next(error);
      }
  }); 

  app.post("/support/contact", async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        next(error);
      }
  }); 

  app.get("/support/contact", async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        next(error);
      }
  }); 


  app.post("/support/about", async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        next(error);
      }
  }); 


  app.get("/support/about", async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
}); 

  }