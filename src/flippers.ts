import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const flip = animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
          offset: 0,
        }),
        style({
          transform:
            'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
          offset: 0.4,
        }),
        style({
          transform:
            'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
          offset: 0.5,
        }),
        style({
          transform: 'perspective(400px) scale3d(.95, .95, .95)',
          offset: 0.8,
        }),
        style({
          transform: 'perspective(400px)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING },
  }
);

export const flipIn = animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          opacity: 0,
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
          offset: 0,
        }),
        style({
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
          offset: 0.4,
        }),
        style({
          opacity: 1,
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
          offset: 0.6,
        }),
        style({
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
          offset: 0.8,
        }),
        style({
          transform: 'perspective(400px)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, rotateX: 1, rotateY: 0 },
  }
);

export const flipOut = animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          transform: 'perspective(400px)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
          offset: 0.3,
        }),
        style({
          opacity: 0,
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, rotateX: 1, rotateY: 0 },
  }
);
