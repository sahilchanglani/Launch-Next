import express from 'express';

import { getStartups, getStartup, createStartup, updateStartup, likeStartup, deleteStartup } from '../controllers/startups.js';
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/', getStartups);
router.post('/', auth, createStartup);
router.get('/:id', getStartup);
router.patch('/:id', auth, updateStartup);
router.delete('/:id', auth, deleteStartup);
router.patch('/:id/likeStartup', auth, likeStartup);

export default router;