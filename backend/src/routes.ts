import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesControlller from './controllers/Orphanagescontreollers';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images') ,OrphanagesControlller.create);
routes.get('/orphanages', OrphanagesControlller.index);
routes.get('/orphanages/:id', OrphanagesControlller.show);

export default routes;