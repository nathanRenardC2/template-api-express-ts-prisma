import { Router } from 'express';
import { TrackRouter } from './track-routes';


const router: Router = Router();

router.use('/tracks', TrackRouter);

export const MainRouter: Router = router;