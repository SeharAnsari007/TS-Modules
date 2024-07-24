"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.particularStudent = exports.isPassedEntryTest = exports.getOnsiteStudent = exports.getAllStudents = void 0;
const data_1 = __importDefault(require("./data"));
const getAllStudents = () => {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnsiteStudent = () => {
    const result = data_1.default.filter((student) => student.isOnsiteAllowed);
    return result;
};
exports.getOnsiteStudent = getOnsiteStudent;
const isPassedEntryTest = () => {
    const result = data_1.default.filter((student) => student.entryTest.isPassed);
    return result;
};
exports.isPassedEntryTest = isPassedEntryTest;
const particularStudent = (id) => {
    const getUser = data_1.default.find((student) => student.id === id);
    return getUser;
};
exports.particularStudent = particularStudent;
