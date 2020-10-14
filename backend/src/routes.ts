import {Router} from 'express';
import OrphanagesControlller from './controllers/Orphanagescontreollers';

const routes = Router();

routes.post('/orphanages', OrphanagesControlller.create);
routes.get('/orphanages', OrphanagesControlller.index);
routes.get('/orphanages/:id', OrphanagesControlller.show);

export default routes;