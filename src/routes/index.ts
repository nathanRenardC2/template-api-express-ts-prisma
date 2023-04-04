import { Router } from 'express';
import { ArtistRouter } from './artist-routes';
import { TrackRouter } from './track-routes';
import { UserRouter } from './user-routes';
import { AuthRouter } from './auth-routes';


const router: Router = Router();

router.use('/tracks', TrackRouter);
router.use('/artists', ArtistRouter);
router.use('/users', UserRouter);
router.use('/auth', AuthRouter);

export const MainRouter: Router = router;