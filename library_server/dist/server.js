"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("./config/index");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = index_1.config.server.port; // Default port
//const MONGO_URL: string = config.mongo.url || 'mongodb://localhost:27017'; // Default MongoDB URL
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(function startUp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URL, {
                w: "majority",
                retryWrites: true,
                authMechanism: "DEFAULT",
            });
            console.log('Successfully connected to the database.');
            app.get("/health", (req, res) => {
                res.status(200).json({ message: "Server is running properly!" });
            });
            app.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
            });
        }
        catch (error) {
            console.error('Could not connect to the database:', error);
            process.exit(1);
        }
    });
})();
