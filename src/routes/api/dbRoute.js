/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import express from 'express';

//controllers
import * as dbController from '../../controllers/dbController';

let router = express.Router();

router.get('/', dbController.list);

export default router;