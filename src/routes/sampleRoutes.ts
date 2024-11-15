// routes/sampleRoutes.ts
import express, {Request, Response} from 'express';
import {getSample, postSample} from '../controllers/sampleController';

const router = express.Router();

router.get('/get-sample', getSample);
router.post('/post-sample', postSample);

// Test route to check if routing works
router.get('/test', (req: Request, res: Response): void => {
    res.send('Test route works!');
});

export default router;
