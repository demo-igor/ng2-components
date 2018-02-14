"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by igordemo on 11/17/17.
 */
var core_1 = require("@angular/core");
var CapitalizeAllPipe = (function () {
    function CapitalizeAllPipe() {
    }
    CapitalizeAllPipe.prototype.transform = function (value) {
        if (value) {
            var arr = value.split(' ');
            arr = arr.map(function (val) {
                return val.charAt(0).toUpperCase() + val.slice(1);
            });
            return arr.join(' ');
        }
        return value;
    };
    CapitalizeAllPipe = __decorate([
        core_1.Pipe({
            name: 'capitalizeAll'
        })
    ], CapitalizeAllPipe);
    return CapitalizeAllPipe;
}());
exports.CapitalizeAllPipe = CapitalizeAllPipe;
