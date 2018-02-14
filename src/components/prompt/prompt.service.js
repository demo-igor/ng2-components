"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by igordemo on 10/17/17.
 */
var rxjs_1 = require("rxjs");
var PromptService = (function () {
    function PromptService() {
        this.subject = new rxjs_1.Subject();
    }
    PromptService.prototype.getPrompt = function () {
        return this.subject;
    };
    PromptService.prototype.open = function (message, accept, decline, id) {
        if (decline === void 0) { decline = function () { }; }
        if (id === void 0) { id = null; }
        this.subject.next({ id: id, message: message, accept: accept, decline: decline });
    };
    return PromptService;
}());
exports.PromptService = PromptService;
