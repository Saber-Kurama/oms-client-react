import express from 'express';
import interfaces from '../interfaces';
import ModelRoute from '../lib/modelroute';
const router = express.Router();
ModelRoute.init(interfaces, router);
module.exports = router;
