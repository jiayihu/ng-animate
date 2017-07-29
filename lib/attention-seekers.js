"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
exports.bounce = animations_1.animation([
    animations_1.style({ transform: 'translate3d(0, 0, 0)' }),
    animations_1.animate('{{ timing }}s', animations_1.keyframes([
        animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
        animations_1.style({ transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
        animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
        animations_1.style({ transform: 'translate3d(0, -15px, 0)', offset: 0.7 }),
        animations_1.style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
        animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])),
], { params: { timing: utils_1.DEFAULT_TIMING } });
exports.flash = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ opacity: 1 }),
    animations_1.style({ opacity: 0 }),
    animations_1.style({ opacity: 1 }),
    animations_1.style({ opacity: 0 }),
    animations_1.style({ opacity: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
exports.pulse = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'scale3d(1, 1, 1)' }),
    animations_1.style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
    animations_1.style({ transform: 'scale3d(1, 1, 1)' }),
])), { params: { scale: 1.25, timing: utils_1.DEFAULT_TIMING } });
exports.rubberBand = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
    animations_1.style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
    animations_1.style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
    animations_1.style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
    animations_1.style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
exports.shake = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
exports.swing = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
exports.tada = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animations_1.style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.1
    }),
    animations_1.style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.2
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.4
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.5
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.6
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.7
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.8
    }),
    animations_1.style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.9
    }),
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
exports.wobble = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'none', offset: 0 }),
    animations_1.style({
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
        offset: 0.15
    }),
    animations_1.style({
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3
    }),
    animations_1.style({
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        offset: 0.45
    }),
    animations_1.style({
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        offset: 0.6
    }),
    animations_1.style({
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        offset: 0.75
    }),
    animations_1.style({ transform: 'none', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
exports.jello = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'none', offset: 0 }),
    animations_1.style({ transform: 'none', offset: 0.11 }),
    animations_1.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22 }),
    animations_1.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33 }),
    animations_1.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44 }),
    animations_1.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55 }),
    animations_1.style({
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        offset: 0.66
    }),
    animations_1.style({
        transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        offset: 0.77
    }),
    animations_1.style({
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        offset: 0.88
    }),
    animations_1.style({ transform: 'none', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
