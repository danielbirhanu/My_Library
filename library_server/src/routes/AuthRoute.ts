import express from 'express';
import AuthController from '../controllers/AuthController';
import { ValidateSchema, Schemas } from "../middlewares/Validation";

const router = express.Router();

router.post('/register', ValidateSchema(Schemas.user.create), AuthController.handleRegister);
router.post('/login',ValidateSchema(Schemas.user.login), AuthController.handleLogin);

export default router;

