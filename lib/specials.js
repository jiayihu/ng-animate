"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
exports.hinge = animations_1.animation([
    animations_1.style({ 'transform-origin': 'top left' }),
    animations_1.animate('{{ timing }}s ease-in-out', animations_1.keyframes([
        animations_1.style({
            transform: 'rotate3d(0, 0, 1, 80deg)',
            offset: 0.2
        }),
        animations_1.style({
            transform: 'rotate3d(0, 0, 1, 60deg)',
            offset: 0.4
        }),
        animations_1.style({
            transform: 'rotate3d(0, 0, 1, 80deg)',
            offset: 0.6
        }),
        animations_1.style({
            opacity: 1,
            transform: 'rotate3d(0, 0, 1, 60deg)',
            offset: 0.8
        }),
        animations_1.style({
            opacity: 0,
            transform: 'translate3d(0, 700px, 0)',
            offset: 1
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
exports.jackInTheBox = animations_1.animation([
    animations_1.animate('{{ timing }}s', animations_1.keyframes([
        animations_1.style({
            opacity: 0,
            transform: 'scale(0.1) rotate(30deg)',
            'transform-origin': 'center bottom',
            offset: 0
        }),
        animations_1.style({
            opacity: 0.5,
            transform: 'rotate(-10deg)',
            offset: 0.5
        }),
        animations_1.style({
            opacity: 0.7,
            transform: 'rotate(3deg)',
            offset: 0.7
        }),
        animations_1.style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
exports.rollIn = animations_1.animation([
    animations_1.animate('{{ timing }}s', animations_1.keyframes([
        animations_1.style({
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
            offset: 0
        }),
        animations_1.style({
            opacity: 1,
            transform: 'none',
            offset: 1
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
exports.rollOut = animations_1.animation([
    animations_1.animate('{{ timing }}s', animations_1.keyframes([
        animations_1.style({
            opacity: 1,
            offset: 0
        }),
        animations_1.style({
            opacity: 0,
            transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
            offset: 1
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
