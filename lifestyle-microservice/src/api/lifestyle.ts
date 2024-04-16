import { Request, Response, NextFunction } from 'express';
import { AccountService } from '../services/account-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new AccountService();
    
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


app.put("/resetpasword", async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
});

app.get("/profile", async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
});

app.get("/updateprofile", async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
});

app.get("/deleteprofile", async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
});

  }