import { Router } from 'express';
import { ArtistRouter } from './artist-routes';
import { TrackRouter } from './track-routes';


const router: Router = Router();

router.use('/tracks', TrackRouter);
router.use('/artists', ArtistRouter);

export const MainRouter: Router = router;