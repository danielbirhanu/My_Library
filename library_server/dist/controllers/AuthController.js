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
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
function handleRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        try {
            const registeredUser = yield (0, UserService_1.register)(user);
            res.status(201).json({
                message: "User successfully created",
                user: {
                    _id: registeredUser._id,
                    _type: registeredUser.type,
                    firstName: registeredUser.firstName,
                    lastName: registeredUser.lastName,
                    email: registeredUser.email,
                }
            });
        }
        catch (error) {
            res.status(500).json({ message: "Unable to register user at this time", error: error.message });
        }
    });
}
exports.default = { handleRegister };
