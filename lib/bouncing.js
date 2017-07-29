"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
exports.bounceIn = animations_1.animation(animations_1.animate('{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)', animations_1.keyframes([
    animations_1.style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
    animations_1.style({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
    animations_1.style({
        opacity: 1,
        transform: 'scale3d(1.03, 1.03, 1.03)',
        offset: 0.6
    }),
    animations_1.style({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING } });
function bounceInDirection(axis) {
    var translate3d = utils_1.transformAxis(axis, 'translate3d');
    return function (steps) {
        var params = Object.assign({ timing: utils_1.DEFAULT_TIMING }, steps);
        return animations_1.animation(animations_1.animate('{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)', animations_1.keyframes([
            animations_1.style({ opacity: 0, transform: translate3d('a'), offset: 0 }),
            animations_1.style({ opacity: 1, transform: translate3d('b'), offset: 0.6 }),
            animations_1.style({ transform: translate3d('c'), offset: 0.75 }),
            animations_1.style({ transform: translate3d('d'), offset: 0.9 }),
            animations_1.style({ opacity: 1, transform: 'none', offset: 1 }),
        ])), { params: params });
    };
}
var bounceInY = bounceInDirection('y');
var bounceInX = bounceInDirection('x');
exports.bounceInDown = bounceInY({
    a: '-3000px',
    b: '25px',
    c: '-10px',
    d: '5px'
});
exports.bounceInUp = bounceInY({
    a: '3000px',
    b: '-25px',
    c: '10px',
    d: '-5px'
});
exports.bounceInLeft = bounceInX({
    a: '-3000px',
    b: '25px',
    c: '-10px',
    d: '5px'
});
exports.bounceInRight = bounceInX({
    a: '3000px',
    b: '-25px',
    c: '10px',
    d: '-5px'
});
exports.bounceOut = animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
    animations_1.style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
    animations_1.style({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.5
    }),
    animations_1.style({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.55
    }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
])), { params: { timing: utils_1.DEFAULT_TIMING, scale: 1.1 } });
function bounceOutDirection(axis) {
    var translate3d = utils_1.transformAxis(axis, 'translate3d');
    if (axis === 'y') {
        return function (steps) {
            var params = Object.assign({ timing: utils_1.DEFAULT_TIMING }, steps);
            return animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
                animations_1.style({ transform: translate3d('a'), offset: 0.2 }),
                animations_1.style({ opacity: 1, transform: translate3d('b'), offset: 0.4 }),
                animations_1.style({ opacity: 1, transform: translate3d('c'), offset: 0.45 }),
                animations_1.style({ opacity: 0, transform: translate3d('d'), offset: 1 }),
            ])), { params: params });
        };
    }
    return function (steps) {
        var params = Object.assign({}, { timing: utils_1.DEFAULT_TIMING }, steps);
        return animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
            animations_1.style({ opacity: 1, transform: translate3d('a'), offset: 0.2 }),
            animations_1.style({ opacity: 0, transform: translate3d('b'), offset: 1 }),
        ])), { params: params });
    };
}
var bounceOutY = bounceOutDirection('y');
var bounceOutX = bounceOutDirection('x');
exports.bounceOutDown = bounceOutY({
    a: '10px',
    b: '-20px',
    c: '-20px',
    d: '2000px'
});
exports.bounceOutUp = bounceOutY({
    a: '-10px',
    b: '20px',
    c: '20px',
    d: '-2000px'
});
exports.bounceOutLeft = bounceOutX({
    a: '20px',
    b: '-2000px'
});
exports.bounceOutRight = bounceOutX({
    a: '-20px',
    b: '2000px'
});
