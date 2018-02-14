"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var alert_model_1 = require("./alert.model");
var AlertService = (function () {
    function AlertService() {
        this.subject = new rxjs_1.Subject();
    }
    AlertService.prototype.alert = function (id, type, message, hide) {
        this.subject.next({ id: id, type: type, message: message, hide: hide });
    };
    AlertService.prototype.getAlert = function () {
        return this.subject;
    };
    AlertService.prototype.success = function (message, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? null : _c, _d = _b.hide, hide = _d === void 0 ? false : _d;
        this.alert(id, alert_model_1.AlertType.Success, message, hide);
    };
    AlertService.prototype.error = function (message, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? null : _c, _d = _b.hide, hide = _d === void 0 ? false : _d;
        this.alert(id, alert_model_1.AlertType.Error, message, hide);
    };
    AlertService.prototype.info = function (message, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? null : _c, _d = _b.hide, hide = _d === void 0 ? false : _d;
        this.alert(id, alert_model_1.AlertType.Info, message, hide);
    };
    AlertService.prototype.warning = function (message, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? null : _c, _d = _b.hide, hide = _d === void 0 ? false : _d;
        this.alert(id, alert_model_1.AlertType.Warning, message, hide);
    };
    AlertService.prototype.clear = function () {
        this.subject.next(null);
    };
    AlertService = __decorate([
        core_1.Injectable()
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
