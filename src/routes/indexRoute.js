/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/1/16.
 */

import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

export default router;