"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
exports.flip = animations_1.animation([
    animations_1.style({ 'backface-visibility': 'visible' }),
    animations_1.animate('{{ timing }}s ease-out', animations_1.keyframes([
        animations_1.style({
            transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
            offset: 0
        }),
        animations_1.style({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotate3d(0, 1, 0, -190deg)',
            offset: 0.4
        }),
        animations_1.style({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotate3d(0, 1, 0, -170deg)',
            offset: 0.5
        }),
        animations_1.style({
            transform: 'perspective(400px) scale3d(.95, .95, .95)',
            offset: 0.8
        }),
        animations_1.style({
            transform: 'perspective(400px)',
            offset: 1
        }),
    ])),
], {
    params: { timing: utils_1.DEFAULT_TIMING }
});
function flipIn(rotateX, rotateY) {
    var params = { timing: utils_1.DEFAULT_TIMING, rotateX: rotateX, rotateY: rotateY };
    return animations_1.animation([
        animations_1.style({ 'backface-visibility': 'visible' }),
        animations_1.animate('{{ timing }}s ease-in', animations_1.keyframes([
            animations_1.style({
                opacity: 0,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                offset: 0
            }),
            animations_1.style({
                opacity: 1,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                offset: 0.4
            }),
            animations_1.style({
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
                offset: 0.6
            }),
            animations_1.style({
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
                offset: 0.8
            }),
            animations_1.style({
                transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
                offset: 1
            }),
        ])),
    ], { params: params });
}
exports.flipInX = flipIn(1, 0);
exports.flipInY = flipIn(0, 1);
function flipOut(rotateX, rotateY) {
    var params = { timing: utils_1.DEFAULT_TIMING, rotateX: rotateX, rotateY: rotateY };
    return animations_1.animation([
        animations_1.style({ 'backface-visibility': 'visible' }),
        animations_1.animate('{{ timing }}s', animations_1.keyframes([
            animations_1.style({
                transform: 'perspective(400px)',
                offset: 0
            }),
            animations_1.style({
                opacity: 1,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                offset: 0.3
            }),
            animations_1.style({
                opacity: 0,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                offset: 1
            }),
        ])),
    ], { params: params });
}
exports.flipOutX = flipOut(1, 0);
exports.flipOutY = flipOut(0, 1);
