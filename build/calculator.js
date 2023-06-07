"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    Calculator.prototype.multiplication = function (x, y) {
        return x * y;
    };
    Calculator.prototype.division = function (x, y) {
        if (y != 0) {
            return x / y;
        }
        throw { name: 'Zero Division Error', message: 'Zero Division Error' };
    };
    return Calculator;
}());
exports.default = Calculator;
