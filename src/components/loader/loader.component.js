"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by igordemo on 10/18/17.
 */
var core_1 = require("@angular/core");
var LoaderComponent = (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.loaderId = null;
        this.isOpen = false;
        this.isOpened = new core_1.EventEmitter();
        this.isClosed = new core_1.EventEmitter();
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.getLoader().subscribe(function (loader) {
            if ((loader.id || _this.loaderId) && loader.id !== _this.loaderId) {
                return;
            }
            if (loader.isOpen) {
                _this.open();
            }
            else {
                _this.close();
            }
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent.prototype.open = function () {
        this.isOpen = true;
        this.isOpened.emit(this.loaderId);
    };
    LoaderComponent.prototype.close = function () {
        this.isOpen = false;
        this.isClosed.emit(this.loaderId);
    };
    __decorate([
        core_1.Input()
    ], LoaderComponent.prototype, "loaderId", void 0);
    __decorate([
        core_1.Input()
    ], LoaderComponent.prototype, "isOpen", void 0);
    __decorate([
        core_1.Output()
    ], LoaderComponent.prototype, "isOpened", void 0);
    __decorate([
        core_1.Output()
    ], LoaderComponent.prototype, "isClosed", void 0);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
