import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const fade3d = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({
        opacity: '{{ fromOpacity }}',
        transform: 'translate3d({{ fromX }}, {{ fromY }}, {{ fromZ }})',
        offset: 0,
      }),
      style({ opacity: '{{ toOpacity }}', transform: 'none', offset: 1 }),
    ])
  ),
  {
    params: {
      timing: DEFAULT_TIMING,
      fromOpacity: 1,
      toOpacity: 0,
      fromX: 0,
      fromY: 0,
      fromZ: 0,
    },
  }
);
