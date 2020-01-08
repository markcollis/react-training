"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3001, function () {
    console.log('Listening on port 3001');
});
//# sourceMappingURL=server.js.map