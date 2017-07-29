"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
exports.lightSpeedIn = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        offset: 0
    }),
    animations_1.style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0) skewX(0)',
        offset: 1
    }),
])), {
    params: { timing: utils_1.DEFAULT_TIMING }
});
exports.lightSpeedOut = animations_1.animation(animations_1.animate('{{ timing }}s ease-out', animations_1.keyframes([
    animations_1.style({
        opacity: 1,
        offset: 0
    }),
    animations_1.style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        offset: 1
    }),
])), {
    params: { timing: utils_1.DEFAULT_TIMING }
});
