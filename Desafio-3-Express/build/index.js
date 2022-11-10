"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_json_1 = __importDefault(require("./services/products.json"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8080;
app.get("/", (_req, res) => {
    console.log("Hola");
    res.send("Bienvenidos");
});
app.get("/productosRandom", (_req, res) => {
    const randomProduct = products_json_1.default[Math.floor(Math.random() * products_json_1.default.length)];
    res.send(randomProduct);
});
app.use("/productos", products_1.default);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} `);
});
