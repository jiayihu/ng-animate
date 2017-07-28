import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const rotate = animation(
  [
    style({ 'transform-origin': 'center' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          opacity: '{{ fromOpacity }}',
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 0,
        }),
        style({
          opacity: '{{ toOpacity }}',
          transform: 'none',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: {
      timing: DEFAULT_TIMING,
      fromOpacity: 0,
      toOpacity: 1,
      degrees: '-200deg',
    },
  }
);

export const rotate3d = animation(
  [
    style({ 'transform-origin': '{{ direction }} bottom' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          'transform-origin': '{{ direction }} bottom',
          opacity: '{{ fromOpacity }}',
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 0,
        }),
        style({
          'transform-origin': '{{ direction }} bottom',
          opacity: '{{ toOpacity }}',
          transform: 'none',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: {
      timing: DEFAULT_TIMING,
      fromOpacity: 0,
      toOpacity: 1,
      direction: 'left',
      degrees: '-45deg',
    },
  }
);
