import { Router } from 'express';
import schema from '../middleware/schema';

const notUsingMiddlewareRouter = Router();

// notUsingMiddlewareRouter.use(schema);

notUsingMiddlewareRouter.get('/', async (req, res, next) => {
  try {
    const tenant = req.header('x-tenant');
    res.send(`tenant ${tenant}`);
  } catch (error) {
    next(error)
  }
});

export default notUsingMiddlewareRouter;