"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Validator = void 0;
var validator_1 = require("validator");
exports.Validator = __assign(__assign({}, validator_1["default"]), { notNull: function (value) {
        if (value === "null" || value === null) {
            return false;
        }
        return true;
    } });
exports["default"] = exports.Validator;
