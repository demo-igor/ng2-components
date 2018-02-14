"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Created by igordemo on 10/14/17. ...*/
var core_1 = require("@angular/core");
var alert_model_1 = require("./alert.model");
var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alertId = null;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            if ((alert.id || _this.alertId) && _this.alertId !== alert.id) {
                return;
            }
            _this.alerts.push(alert);
            if (alert.hide) {
                setTimeout(function () { return _this.removeAlert(alert); }, 3000);
            }
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
        this.subscription.unsubscribe();
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.alertCss = function (type) {
        switch (type) {
            case alert_model_1.AlertType.Success:
                return 'success';
            case alert_model_1.AlertType.Error:
                return 'alert';
            case alert_model_1.AlertType.Info:
                return 'primary';
            case alert_model_1.AlertType.Warning:
                return 'warning';
            default:
                return 'secondary';
        }
    };
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "alertId", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
