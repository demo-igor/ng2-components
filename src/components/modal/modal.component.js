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
var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.modalId = null;
        this.modalType = '';
        this.modalClose = true;
        this.isOpen = false;
        this.isOpened = new core_1.EventEmitter();
        this.isClosed = new core_1.EventEmitter();
    }
    ModalComponent.prototype.onKeyUp = function (ev) {
        if (ev.keyCode == 27 && this.isOpen) {
            this.close();
        }
    };
    Object.defineProperty(ModalComponent.prototype, "modalContent", {
        set: function (content) {
            this.modalContentRef.clear();
            if (content) {
                if (content instanceof core_1.ComponentRef) {
                    this.modalContentRef.insert(content.hostView);
                }
                else if (content instanceof core_1.TemplateRef) {
                    this.modalContentRef.createEmbeddedView(content);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.modalService.getModal().subscribe(function (modal) {
            if ((modal.id || _this.modalId) && modal.id !== _this.modalId) {
                return;
            }
            if (modal.isOpen) {
                _this.open();
            }
            else {
                _this.close();
            }
        });
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ModalComponent.prototype.open = function () {
        this.isOpen = true;
        this.isOpened.emit(this.modalId);
    };
    ModalComponent.prototype.close = function () {
        this.isOpen = false;
        this.isClosed.emit(this.modalId);
    };
    ModalComponent.prototype.onClose = function () {
        this.close();
    };
    __decorate([
        core_1.HostListener('document:keyup', ['$event'])
    ], ModalComponent.prototype, "onKeyUp", null);
    __decorate([
        core_1.ViewChild('modalContentRef', { read: core_1.ViewContainerRef })
    ], ModalComponent.prototype, "modalContentRef", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "modalId", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "modalType", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "modalClose", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "isOpen", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "modalContent", null);
    __decorate([
        core_1.Output()
    ], ModalComponent.prototype, "isOpened", void 0);
    __decorate([
        core_1.Output()
    ], ModalComponent.prototype, "isClosed", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
