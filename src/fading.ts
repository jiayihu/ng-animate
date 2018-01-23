import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { DEFAULT_TIMING, transformAxis } from './utils';

function fade(fromOpacity: number, toOpacity: number) {
  return function(axis: 'x' | 'y') {
    const translate3d = transformAxis(axis, 'translate3d');

    return function(steps) {
      const params = Object.assign(
        {
          timing: DEFAULT_TIMING,
          delay: 0,
          fromOpacity,
          toOpacity,
        },
        steps
      );

      return animation(
        animate(
          '{{ timing }}s {{ delay }}s',
          keyframes([
            style({
              opacity: '{{ fromOpacity }}',
              transform: translate3d('a'),
              offset: 0,
            }),
            style({
              opacity: '{{ toOpacity }}',
              transform: translate3d('b'),
              offset: 1,
            }),
          ])
        ),
        { params }
      );
    };
  };
}

export const fadeInDirection = fade(0, 1);
export const fadeInX = fadeInDirection('x');
export const fadeInY = fadeInDirection('y');

export const fadeIn = fadeInX({ a: 0, b: 0 });
export const fadeInDown = fadeInY({ a: '-100%', b: 0 });
export const fadeInUp = fadeInY({ a: '100%', b: 0 });
export const fadeInLeft = fadeInX({ a: '-100%', b: 0 });
export const fadeInRight = fadeInX({ a: '100%', b: 0 });

export const fadeOutDirection = fade(1, 0);
export const fadeOutX = fadeOutDirection('x');
export const fadeOutY = fadeOutDirection('y');

export const fadeOut = fadeOutX({ a: 0, b: 0 });
export const fadeOutDown = fadeOutY({ a: '-100%', b: 0 });
export const fadeOutUp = fadeOutY({ a: '100%', b: 0 });
export const fadeOutLeft = fadeOutX({ a: '-100%', b: 0 });
export const fadeOutRight = fadeOutX({ a: '100%', b: 0 });

export const slideDirection = fade(1, 1);
export const slideX = slideDirection('x');
export const slideY = slideDirection('y');

export const slideInUp = slideY({ a: '-100%', b: 0 });
export const slideInDown = slideY({ a: '100%', b: 0 });
export const slideInLeft = slideX({ a: '-100%', b: 0 });
export const slideInRight = slideX({ a: '100%', b: 0 });
export const slideOutUp = slideY({ a: 0, b: '-100%' });
export const slideOutDown = slideY({ a: 0, b: '100%' });
export const slideOutLeft = slideX({ a: 0, b: '-100%' });
export const slideOutRight = slideX({ a: 0, b: '100%' });
