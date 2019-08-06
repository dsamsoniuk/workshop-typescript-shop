// import express from "express";

// const app = express();

// app.get('/', (req: Express.Request, res: express.Response) => {
//     res.json({ status: 'ok'});
// });
import express from 'express';
// app.get('/products', (req: Express.Request, res: express.Response) => {
//     res.json(products);
// });

const router = express.Router();

router.get('/', (req: Express.Request, res: express.Response) => {
    res.json({ status: 'ok'});
});

export function setupBaseRoutes(app: express.Application) {
    app.use(router);
}