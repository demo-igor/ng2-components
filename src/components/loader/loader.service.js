"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by igordemo on 10/18/17.
 */
var rxjs_1 = require("rxjs");
var LoaderService = (function () {
    function LoaderService() {
        this.subject = new rxjs_1.Subject();
    }
    LoaderService.prototype.getLoader = function () {
        return this.subject;
    };
    LoaderService.prototype.open = function (id) {
        if (id === void 0) { id = null; }
        this.subject.next({ id: id, isOpen: true });
    };
    LoaderService.prototype.close = function (id) {
        if (id === void 0) { id = null; }
        this.subject.next({ id: id, isOpen: false });
    };
    return LoaderService;
}());
exports.LoaderService = LoaderService;
