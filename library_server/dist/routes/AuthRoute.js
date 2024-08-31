"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const Validation_1 = require("../middlewares/Validation");
const router = express_1.default.Router();
router.post('/register', (0, Validation_1.ValidateSchema)(Validation_1.Schemas.user.create), AuthController_1.default.handleRegister);
router.post('/login', AuthController_1.default.handleLogin);
exports.default = router;
