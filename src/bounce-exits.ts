import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

/**
 * Bouncing exits
 */

export const bounceOut = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
      style({
        opacity: 1,
        transform: 'scale3d(1.1, 1.1, 1.1)',
        offset: 0.5,
      }),
      style({
        opacity: 1,
        transform: 'scale3d(1.1, 1.1, 1.1)',
        offset: 0.55,
      }),
      style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceOutDown = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }),
      style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.4 }),
      style({
        opacity: 1,
        transform: 'translate3d(0, -20px, 0)',
        offset: 0.45,
      }),
      style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceOutLeft = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
      style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceOutRight = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }),
      style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceOutUp = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
      style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.4 }),
      style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.45 }),
      style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);
