"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
exports.zoomIn = animations_1.animation([
    animations_1.animate('{{ timing }}s', animations_1.keyframes([
        animations_1.style({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)',
            offset: 0
        }),
        animations_1.style({
            opacity: 1,
            transform: 'scale3d(1, 1, 1)',
            offset: 0.5
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
function zoomInDirection(axis) {
    var translate3d = utils_1.transformAxis(axis, 'translate3d');
    return function (steps) {
        var params = Object.assign({ timing: utils_1.DEFAULT_TIMING }, steps);
        return animations_1.animation(animations_1.animate('{{ timing }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)', animations_1.keyframes([
            animations_1.style({
                opacity: 0,
                transform: "scale3d(.1, .1, .1) " + translate3d('a'),
                offset: 0
            }),
            animations_1.style({
                opacity: 1,
                transform: "scale3d(.475, .475, .475) " + translate3d('b'),
                offset: 0.6
            }),
        ])), { params: params });
    };
}
var zoomInY = zoomInDirection('y');
var zoomInX = zoomInDirection('x');
exports.zoomInDown = zoomInY({
    a: '-1000px',
    b: '10px'
});
exports.zoomInUp = zoomInY({
    a: '1000px',
    b: '-10px'
});
exports.zoomInLeft = zoomInX({
    a: '-1000px',
    b: '10px'
});
exports.zoomInRight = zoomInX({
    a: '1000px',
    b: '-10px'
});
exports.zoomOut = animations_1.animation([
    animations_1.animate('{{ timing }}s', animations_1.keyframes([
        animations_1.style({
            opacity: 1,
            offset: 0
        }),
        animations_1.style({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)',
            offset: 0.5
        }),
        animations_1.style({
            opacity: 0,
            offset: 1
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
function zoomOutDirection(axis) {
    var translate3d = utils_1.transformAxis(axis, 'translate3d');
    return function (steps) {
        var params = Object.assign({ timing: utils_1.DEFAULT_TIMING }, steps);
        return animations_1.animation(animations_1.animate('{{ timing }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)', animations_1.keyframes([
            animations_1.style({
                opacity: 1,
                transform: "scale3d(.475, .475, .475) " + translate3d('a'),
                offset: 0.4
            }),
            animations_1.style({
                opacity: 0,
                transform: "scale3d(.1, .1, .1) " + translate3d('b'),
                offset: 1
            }),
        ])), { params: params });
    };
}
var zoomOutY = zoomOutDirection('y');
var zoomOutX = zoomOutDirection('x');
exports.zoomOutDown = zoomOutY({
    a: '-60px',
    b: '2000px'
});
exports.zoomOutUp = zoomOutY({
    a: '60px',
    b: '-2000px'
});
exports.zoomOutLeft = zoomOutX({
    a: '42px',
    b: '-2000px'
});
exports.zoomOutRight = zoomOutX({
    a: '-42px',
    b: '2000px'
});
