"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var CustomCurrencyPipe = (function (_super) {
    __extends(CustomCurrencyPipe, _super);
    function CustomCurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCurrencyPipe.prototype.transform = function (value, digits) {
        var result = _super.prototype.transform.call(this, value, digits);
        if (result) {
            result = result.replace(/(,|\.)/g, function (val) { return val == ',' ? '.' : ','; });
        }
        return result;
    };
    CustomCurrencyPipe = __decorate([
        core_1.Pipe({
            name: 'customCurrency'
        })
    ], CustomCurrencyPipe);
    return CustomCurrencyPipe;
}(common_1.DecimalPipe));
exports.CustomCurrencyPipe = CustomCurrencyPipe;
