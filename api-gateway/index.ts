import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from "helmet";
import morgan from "morgan";
import { createProxyMiddleware} from 'http-proxy-middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(morgan("combined")); // Log HTTP requests
app.use(createProxyMiddleware)

// Define routes and corresponding microservices
const services = [
    {
      route: "/account",
      target: "http://localhost:3001",
    },
    {
      route: "/investment",
      target: "http://localhost:3002",
    },
    {
      route: "/lifestyle",
      target: "http://localhost:3003",
    },
    {
      route: "/notification",
      target: "http://localhost:3004",
    },
    {
        route: "/payment",
        target: "http://localhost:3005",
      },
      {
        route: "/support",
        target: "http://localhost:3006",
      },
      {
        route: "/transaction",
        target: "http://localhost:3007",
      },
      {
        route: "/user",
        target: "http://localhost:3008",
      },
  ];
  services.forEach(({ route, target }) => {
    // Proxy options
    const proxyOptions = {
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${route}`]: "",
      },
    };
},
app.listen(3000, () => {
    console.log(`Gateway is Listening on Port 3000`);
}))

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Not found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("Sorry can't find that!");
});
