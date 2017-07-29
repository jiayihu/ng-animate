"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
function fade(fromOpacity, toOpacity) {
    return function (axis) {
        var translate3d = utils_1.transformAxis(axis, 'translate3d');
        return function (steps) {
            var params = Object.assign({
                timing: utils_1.DEFAULT_TIMING,
                fromOpacity: fromOpacity,
                toOpacity: toOpacity
            }, steps);
            return animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
                animations_1.style({
                    opacity: '{{ fromOpacity }}',
                    transform: translate3d('a'),
                    offset: 0
                }),
                animations_1.style({
                    opacity: '{{ toOpacity }}',
                    transform: translate3d('b'),
                    offset: 1
                }),
            ])), { params: params });
        };
    };
}
var fadeInDirection = fade(0, 1);
var fadeInX = fadeInDirection('x');
var fadeInY = fadeInDirection('y');
exports.fadeIn = fadeInX({ a: 0, b: 0 });
exports.fadeInDown = fadeInY({ a: '-100%', b: 0 });
exports.fadeInUp = fadeInY({ a: '100%', b: 0 });
exports.fadeInLeft = fadeInX({ a: '-100%', b: 0 });
exports.fadeInRight = fadeInX({ a: '100%', b: 0 });
var fadeOutDirection = fade(1, 0);
var fadeOutX = fadeOutDirection('x');
var fadeOutY = fadeOutDirection('y');
exports.fadeOut = fadeOutX({ a: 0, b: 0 });
exports.fadeOutDown = fadeOutY({ a: '-100%', b: 0 });
exports.fadeOutUp = fadeOutY({ a: '100%', b: 0 });
exports.fadeOutLeft = fadeOutX({ a: '-100%', b: 0 });
exports.fadeOutRight = fadeOutX({ a: '100%', b: 0 });
var slideDirection = fade(1, 1);
var slideX = slideDirection('x');
var slideY = slideDirection('y');
exports.slideInUp = slideY({ a: '-100%', b: 0 });
exports.slideInDown = slideY({ a: '100%', b: 0 });
exports.slideInLeft = slideX({ a: '-100%', b: 0 });
exports.slideInRight = slideX({ a: '100%', b: 0 });
exports.slideOutUp = slideY({ a: 0, b: '-100%' });
exports.slideOutDown = slideY({ a: 0, b: '100%' });
exports.slideOutLeft = slideX({ a: 0, b: '-100%' });
exports.slideOutRight = slideX({ a: 0, b: '100%' });
