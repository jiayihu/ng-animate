import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { DEFAULT_TIMING, transformAxis } from './utils';

function rotate(fromOpacity: number, toOpacity: number) {
  const isIn = fromOpacity <= toOpacity;

  return function(origin: string) {
    return function(degrees) {
      const params = {
        timing: DEFAULT_TIMING,
        fromOpacity,
        toOpacity,
        origin,
        degrees,
      };

      return animation(
        animate(
          '{{ timing }}s',
          keyframes([
            style({
              'transform-origin': '{{ origin }}',
              opacity: '{{ fromOpacity }}',
              transform: isIn ? 'rotate3d(0, 0, 1, {{ degrees }})' : 'none',
              offset: 0,
            }),
            style({
              'transform-origin': '{{ origin }}',
              opacity: '{{ toOpacity }}',
              transform: isIn ? 'none' : 'rotate3d(0, 0, 1, {{ degrees }})',
              offset: 1,
            }),
          ])
        ),
        { params }
      );
    };
  };
}

const rotateInDirection = rotate(0, 1);
const rotateInLeft = rotateInDirection('left bottom');
const rotateInRight = rotateInDirection('right bottom');

export const rotateIn = rotateInDirection('center')('-200deg');
export const rotateInDownLeft = rotateInLeft('-45deg');
export const rotateInDownRight = rotateInRight('45deg');
export const rotateInUpLeft = rotateInLeft('45deg');
export const rotateInUpRight = rotateInRight('-90deg');

const rotateOutDirection = rotate(1, 0);
const rotateOutLeft = rotateOutDirection('left bottom');
const rotateOutRight = rotateOutDirection('right bottom');

export const rotateOut = rotateOutDirection('center')('200deg');
export const rotateOutDownLeft = rotateOutLeft('45deg');
export const rotateOutDownRight = rotateOutRight('-45deg');
export const rotateOutUpLeft = rotateOutLeft('-45deg');
export const rotateOutUpRight = rotateOutRight('90deg');
