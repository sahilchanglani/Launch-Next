import express from 'express';

import { getStartups, getStartup, createStartup, updateStartup, likeStartup, deleteStartup } from '../controllers/startups.js';

const router = express.Router();

router.get('/', getStartups);
router.post('/', createStartup);
router.get('/:id', getStartup);
router.patch('/:id', updateStartup);
router.delete('/:id', deleteStartup);
router.patch('/:id/likeStartup', likeStartup);

export default router;