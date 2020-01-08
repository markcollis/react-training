"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const simpleLogger = (req, res, next) => {
    console.log(`Received request: ${req.method} ${req.path} at ${new Date().toLocaleString()}`);
    next();
};
app.use(body_parser_1.default.json());
app.use(simpleLogger);
let users = [];
app.get('/users', (req, res) => {
    res.send(JSON.stringify(users));
});
app.post('/users', (req, res) => {
    const newUser = Object.assign({ id: users.length + 1 }, req.body);
    users = [...users, newUser];
    res.send(JSON.stringify(newUser));
});
app.listen(3001, () => {
    console.log(`Back end listening on port 3001, started at ${new Date().toLocaleString()}`);
});
//# sourceMappingURL=server.js.map