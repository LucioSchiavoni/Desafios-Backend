"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const products_json_1 = __importDefault(require("./products.json"));
const products = products_json_1.default;
const getEntries = () => products;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = products.find(d => d.id = id);
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    return products.map(({ id, title, price }) => {
        return {
            id,
            title,
            price
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = () => undefined;
exports.addEntry = addEntry;
