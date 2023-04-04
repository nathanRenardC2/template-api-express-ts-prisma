import { Router } from 'express';
import { AuthRouter } from './auth-routes';


const router: Router = Router();

router.use('/auth', AuthRouter);

export const MainRouter: Router = router;