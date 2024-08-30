import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/register', AuthController.handleRegister);

export default router;

