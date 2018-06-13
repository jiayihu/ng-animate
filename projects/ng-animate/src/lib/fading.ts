import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export function fadeInX(steps) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, ...steps } }
  );
}

export function fadeInY(steps) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, ...steps } }
  );
}

export const fadeIn = fadeInX({ a: 0, b: 0 });
export const fadeInDown = fadeInY({ a: '-100%', b: 0 });
export const fadeInUp = fadeInY({ a: '100%', b: 0 });
export const fadeInLeft = fadeInX({ a: '-100%', b: 0 });
export const fadeInRight = fadeInX({ a: '100%', b: 0 });

export function fadeOutX(steps) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, ...steps } }
  );
}

export function fadeOutY(steps) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, ...steps } }
  );
}

export const fadeOut = fadeOutX({ a: 0, b: 0 });
export const fadeOutDown = fadeOutY({ a: '-100%', b: 0 });
export const fadeOutUp = fadeOutY({ a: '100%', b: 0 });
export const fadeOutLeft = fadeOutX({ a: '-100%', b: 0 });
export const fadeOutRight = fadeOutX({ a: '100%', b: 0 });

export function slideX(steps) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, ...steps } }
  );
}

export function slideY(steps) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, ...steps } }
  );
}

export const slideInUp = slideY({ a: '-100%', b: 0 });
export const slideInDown = slideY({ a: '100%', b: 0 });
export const slideInLeft = slideX({ a: '-100%', b: 0 });
export const slideInRight = slideX({ a: '100%', b: 0 });
export const slideOutUp = slideY({ a: 0, b: '-100%' });
export const slideOutDown = slideY({ a: 0, b: '100%' });
export const slideOutLeft = slideX({ a: 0, b: '-100%' });
export const slideOutRight = slideX({ a: 0, b: '100%' });
