"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by igordemo on 10/17/17.
 */
var rxjs_1 = require("rxjs");
var ModalService = (function () {
    function ModalService() {
        this.subject = new rxjs_1.Subject();
    }
    ModalService.prototype.getModal = function () {
        return this.subject;
    };
    ModalService.prototype.open = function (id) {
        if (id === void 0) { id = null; }
        this.subject.next({ id: id, isOpen: true });
    };
    ModalService.prototype.close = function (id) {
        if (id === void 0) { id = null; }
        this.subject.next({ id: id, isOpen: false });
    };
    return ModalService;
}());
exports.ModalService = ModalService;
