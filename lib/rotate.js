"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var utils_1 = require("./utils");
function rotate(fromOpacity, toOpacity) {
    var isIn = fromOpacity <= toOpacity;
    return function (origin) {
        return function (degrees) {
            var params = {
                timing: utils_1.DEFAULT_TIMING,
                fromOpacity: fromOpacity,
                toOpacity: toOpacity,
                origin: origin,
                degrees: degrees
            };
            return animations_1.animation(animations_1.animate('{{ timing }}s', animations_1.keyframes([
                animations_1.style({
                    'transform-origin': '{{ origin }}',
                    opacity: '{{ fromOpacity }}',
                    transform: isIn ? 'rotate3d(0, 0, 1, {{ degrees }})' : 'none',
                    offset: 0
                }),
                animations_1.style({
                    'transform-origin': '{{ origin }}',
                    opacity: '{{ toOpacity }}',
                    transform: isIn ? 'none' : 'rotate3d(0, 0, 1, {{ degrees }})',
                    offset: 1
                }),
            ])), { params: params });
        };
    };
}
var rotateInDirection = rotate(0, 1);
var rotateInLeft = rotateInDirection('left bottom');
var rotateInRight = rotateInDirection('right bottom');
exports.rotateIn = rotateInDirection('center')('-200deg');
exports.rotateInDownLeft = rotateInLeft('-45deg');
exports.rotateInDownRight = rotateInRight('45deg');
exports.rotateInUpLeft = rotateInLeft('45deg');
exports.rotateInUpRight = rotateInRight('-90deg');
var rotateOutDirection = rotate(1, 0);
var rotateOutLeft = rotateOutDirection('left bottom');
var rotateOutRight = rotateOutDirection('right bottom');
exports.rotateOut = rotateOutDirection('center')('200deg');
exports.rotateOutDownLeft = rotateOutLeft('45deg');
exports.rotateOutDownRight = rotateOutRight('-45deg');
exports.rotateOutUpLeft = rotateOutLeft('-45deg');
exports.rotateOutUpRight = rotateOutRight('90deg');
