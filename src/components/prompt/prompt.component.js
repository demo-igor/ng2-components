"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by igordemo on 10/17/17.
 */
var core_1 = require("@angular/core");
var PromptComponent = (function () {
    function PromptComponent(promptService) {
        this.promptService = promptService;
        this.promptId = null;
        this.isOpen = false;
        this.message = '';
    }
    PromptComponent.prototype.onKeyUp = function (ev) {
        if (ev.keyCode == 27 && this.isOpen) {
            this.onDecline();
        }
    };
    PromptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.promptService.getPrompt().subscribe(function (prompt) {
            if ((prompt.id || _this.promptId) && prompt.id !== _this.promptId) {
                return;
            }
            _this.message = prompt.message;
            _this.callbackAccept = prompt.accept;
            _this.callbackDecline = prompt.decline;
            _this.isOpen = true;
        });
    };
    PromptComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PromptComponent.prototype.close = function () {
        this.isOpen = false;
        this.message = '';
        this.callbackAccept = function () { };
        this.callbackDecline = function () { };
    };
    PromptComponent.prototype.onAccept = function () {
        this.callbackAccept();
        this.close();
    };
    PromptComponent.prototype.onDecline = function () {
        this.callbackDecline();
        this.close();
    };
    PromptComponent.prototype.onClose = function ($event) {
        if ($event.target.classList.value.indexOf('modal') !== -1) {
            this.close();
        }
    };
    __decorate([
        core_1.HostListener('document:keyup', ['$event'])
    ], PromptComponent.prototype, "onKeyUp", null);
    __decorate([
        core_1.Input()
    ], PromptComponent.prototype, "promptId", void 0);
    PromptComponent = __decorate([
        core_1.Component({
            selector: 'app-prompt',
            templateUrl: './prompt.component.html',
            styleUrls: ['./prompt.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], PromptComponent);
    return PromptComponent;
}());
exports.PromptComponent = PromptComponent;
