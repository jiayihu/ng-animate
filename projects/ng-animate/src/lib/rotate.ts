import { animate, animation, AnimationReferenceMetadata, keyframes, style } from '@angular/animations';

import { DEFAULT_TIMING } from './utils';

export function rotateInDirection(
  origin: string,
  degrees: string
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          'transform-origin': '{{ origin }}',
          opacity: '{{ fromOpacity }}',
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 0,
        }),
        style({
          'transform-origin': '{{ origin }}',
          opacity: '{{ toOpacity }}',
          transform: 'none',
          offset: 1,
        }),
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        origin,
        degrees,
        fromOpacity: 0,
        toOpacity: 1,
      },
    }
  );
}

export function rotateOutDirection(
  origin: string,
  degrees: string
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          'transform-origin': '{{ origin }}',
          opacity: '{{ fromOpacity }}',
          transform: 'none',
          offset: 0,
        }),
        style({
          'transform-origin': '{{ origin }}',
          opacity: '{{ toOpacity }}',
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 1,
        }),
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        origin,
        degrees,
        fromOpacity: 1,
        toOpacity: 0,
      },
    }
  );
}

export const rotateIn = rotateInDirection('center', '-200deg');
export const rotateInDownLeft = rotateInDirection('left bottom', '-45deg');
export const rotateInDownRight = rotateInDirection('right bottom', '45deg');
export const rotateInUpLeft = rotateInDirection('left bottom', '45deg');
export const rotateInUpRight = rotateInDirection('right bottom', '-90deg');

export const rotateOut = rotateOutDirection('center', '200deg');
export const rotateOutDownLeft = rotateOutDirection('left bottom', '45deg');
export const rotateOutDownRight = rotateOutDirection('right bottom', '-45deg');
export const rotateOutUpLeft = rotateOutDirection('left bottom', '-45deg');
export const rotateOutUpRight = rotateOutDirection('right bottom', '90deg');
