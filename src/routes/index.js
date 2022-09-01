import { Router } from 'express';
import usingMiddlewareRouter from './using-middleware-router';
import notUsingMiddlewareRouter from './not-using-middleware-router';

const router = Router();

router.use('/using', usingMiddlewareRouter);
router.use('/not-using', notUsingMiddlewareRouter);

router.get('/', (req, res) => {
  res.send(req.session);
});

module.exports = router;
