import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export function rotateInDirection(origin, degrees) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          'transform-origin': '{{ origin }}',
          opacity: 0,
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 0
        }),
        style({
          'transform-origin': '{{ origin }}',
          opacity: 1,
          transform: 'none',
          offset: 1
        })
      ])
    ),
    {
      params: { timing: DEFAULT_TIMING, delay: 0, origin, degrees }
    }
  );
}

export const rotateIn = rotateInDirection('center', '-200deg');
export const rotateInDownLeft = rotateInDirection('left bottom', '-45deg');
export const rotateInDownRight = rotateInDirection('right bottom', '45deg');
export const rotateInUpLeft = rotateInDirection('left bottom', '45deg');
export const rotateInUpRight = rotateInDirection('right bottom', '-90deg');

export function rotateOutDirection(origin, degrees) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          'transform-origin': '{{ origin }}',
          opacity: 1,
          transform: 'none',
          offset: 0
        }),
        style({
          'transform-origin': '{{ origin }}',
          opacity: 0,
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 1
        })
      ])
    ),
    {
      params: { timing: DEFAULT_TIMING, delay: 0, origin, degrees }
    }
  );
}

export const rotateOut = rotateOutDirection('center', '200deg');
export const rotateOutDownLeft = rotateOutDirection('left bottom', '45deg');
export const rotateOutDownRight = rotateInDirection('right bottom', '-45deg');
export const rotateOutUpLeft = rotateOutDirection('left bottom', '-45deg');
export const rotateOutUpRight = rotateInDirection('right bottom', '90deg');
