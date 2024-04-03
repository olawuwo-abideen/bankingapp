import { Request, Response, NextFunction } from 'express';
import { AccountService } from '../services/account-service';
import { UserAuth } from './middlewares/auth';
import { SubscribeMessage } from '../utils';


export default (app: any, channel: any) => {
    
    const service = new AccountService();
    
    app.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { email, password, phone } = req.body;
          const data = await service.SignUp({ email, password, phone });
          return res.json(data);
        } catch (error) {
          next(error);
        }
    });
    
    app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { email, password } = req.body;
          const data = await service.SignIn({ email, password });
          return res.json(data);
        } catch (error) {
          next(error);
        }
    });

    app.post("/address", UserAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { _id } = req.user;
            const { street, postalCode, city, country } = req.body;
            const data = await service.AddNewAddress(_id, {
                street,
                postalCode,
                city,
                country,
            });
            return res.json(data);
        } catch (error) {
            next(error);
        }
    });
    
    app.get("/profile", UserAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { _id } = req.user;
          const data = await service.GetProfile({ _id });
          return res.json(data);
        } catch (error) {
          next(error);
        }
    });
}
