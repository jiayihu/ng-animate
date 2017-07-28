import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

/**
 * Bouncing entrances
 */

export const bounceIn = animation(
  animate(
    '{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
      style({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
      style({
        opacity: 1,
        transform: 'scale3d(1.03, 1.03, 1.03)',
        offset: 0.6,
      }),
      style({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
      style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceInDown = animation(
  animate(
    '{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style({ opacity: 0, transform: 'translate3d(0, -3000px, 0)', offset: 0 }),
      style({
        opacity: 1,
        transform: 'translate3d(0, 25px, 0)',
        offset: 0.6,
      }),
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
      style({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }),
      style({ opacity: 1, transform: 'none', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceInLeft = animation(
  animate(
    '{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style({ opacity: 0, transform: 'translate3d(-3000px, 0, 0)', offset: 0 }),
      style({
        opacity: 1,
        transform: 'translate3d(25px, 0, 0)',
        offset: 0.6,
      }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
      style({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
      style({ opacity: 1, transform: 'none', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceInRight = animation(
  animate(
    '{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style({ opacity: 0, transform: 'translate3d(3000px, 0, 0)', offset: 0 }),
      style({
        opacity: 1,
        transform: 'translate3d(-25px, 0, 0)',
        offset: 0.6,
      }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
      style({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
      style({ opacity: 1, transform: 'none', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const bounceInUp = animation(
  animate(
    '{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style({ opacity: 0, transform: 'translate3d(0, 3000px, 0)', offset: 0 }),
      style({
        opacity: 1,
        transform: 'translate3d(0, -25px, 0)',
        offset: 0.6,
      }),
      style({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
      style({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
      style({ opacity: 1, transform: 'none', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);
