import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

/**
 * Attention seekers
 */

export const bounce = animation(
  [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(
      '{{ timing }}s',
      keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
        style({ transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
        style({ transform: 'translate3d(0, -15px, 0)', offset: 0.7 }),
        style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
      ])
    ),
  ],
  { params: { timing: DEFAULT_TIMING } }
);

export const flash = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const pulse = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)' }),
      style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
      style({ transform: 'scale3d(1, 1, 1)' }),
    ])
  ),
  { params: { scale: 1.25, timing: DEFAULT_TIMING } }
);

export const rubberBand = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
      style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
      style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
      style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
      style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
      style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const shake = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const swing = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
      style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
      style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
      style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const tada = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
      style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.1,
      }),
      style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.2,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.4,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.5,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.6,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.7,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.8,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.9,
      }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const wobble = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'none', offset: 0 }),
      style({
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
        offset: 0.15,
      }),
      style({
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3,
      }),
      style({
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        offset: 0.45,
      }),
      style({
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        offset: 0.6,
      }),
      style({
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        offset: 0.75,
      }),
      style({ transform: 'none', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

export const jello = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'none', offset: 0 }),
      style({ transform: 'none', offset: 0.11 }),
      style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22 }),
      style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33 }),
      style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44 }),
      style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55 }),
      style({
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        offset: 0.66,
      }),
      style({
        transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        offset: 0.77,
      }),
      style({
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        offset: 0.88,
      }),
      style({ transform: 'none', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

/**
 *
 */

export const fade = animation(
  [
    style({ opacity: '{{ from }}' }),
    animate('{{ timing }}s', style({ opacity: '{{ to }}' })),
  ],
  { params: { from: 1, timing: DEFAULT_TIMING, to: 0 } }
);
