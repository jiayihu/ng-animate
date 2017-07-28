import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const lightSpeedIn = animation(
  animate(
    '{{ timing }}s ease-out',
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'skewX(20deg)',
        offset: 0.6,
      }),
      style({
        opacity: 1,
        transform: 'skewX(-5deg)',
        offset: 0.8,
      }),
      style({
        opacity: 1,
        transform: 'none',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING },
  }
);

export const lightSpeedOut = animation(
  animate(
    '{{ timing }}s ease-out',
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
    params: { timing: DEFAULT_TIMING },
  }
);
