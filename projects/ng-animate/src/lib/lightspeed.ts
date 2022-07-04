import { animate, animation, keyframes, style } from '@angular/animations';

import { DEFAULT_TIMING } from './utils';

export const lightSpeedInLeft = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-out',
    keyframes([
      style({
        transform: 'translate3d(-100%, 0, 0) skewX(30deg)',
        opacity: 0,
        offset: 0,
      }),
      style({
        transform: 'skewX(-20deg)',
        opacity: 1,
        offset: 0.6,
      }),
      style({
        transform: 'skewX(5deg)',
        offset: 0.8,
      }),
      style({
        transform: 'translate3d(0, 0, 0)',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

export const lightSpeedIn = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-out',
    keyframes([
      style({
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        opacity: 0,
        offset: 0,
      }),
      style({
        transform: 'skewX(20deg)',
        opacity: 1,
        offset: 0.6,
      }),
      style({
        transform: 'skewX(-5deg)',
        offset: 0.8,
      }),
      style({
        transform: 'translate3d(0, 0, 0)',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);
export const lightSpeedInRight = lightSpeedIn;

export const lightSpeedOut = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-in',
    keyframes([
      style({
        opacity: 1,
        offset: 0,
      }),
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

export const lightSpeedOutRight = lightSpeedOut;

export const lightSpeedOutLeft = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-in',
    keyframes([
      style({
        opacity: 1,
        offset: 0,
      }),
      style({
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);
