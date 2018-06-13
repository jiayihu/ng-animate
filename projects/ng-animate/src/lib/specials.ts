import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const hinge = animation(
  [
    style({ 'transform-origin': 'top left' }),
    animate(
      '{{ timing }}s {{ delay }}s ease-in-out',
      keyframes([
        style({
          transform: 'rotate3d(0, 0, 1, 80deg)',
          offset: 0.2,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.4,
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 80deg)',
          offset: 0.6,
        }),
        style({
          opacity: 1,
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.8,
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, 700px, 0)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

export const jackInTheBox = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(0.1) rotate(30deg)',
          'transform-origin': 'center bottom',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'rotate(-10deg)',
          offset: 0.5,
        }),
        style({
          opacity: 0.7,
          transform: 'rotate(3deg)',
          offset: 0.7,
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

export const rollIn = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'none',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

export const rollOut = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          offset: 0,
        }),
        style({
          opacity: 0,
          transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);
