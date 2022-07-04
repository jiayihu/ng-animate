import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

// https://github.com/animate-css/animate.css/tree/main/source/back_entrances

export const backInUp = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({
        opacity: 0.7,
        transform: 'translateY(1200px) scale(0.7)',
        offset: 0,
      }),
      style({
        opacity: 0.7,
        transform: 'translateY(0px) scale(0.7)',
        offset: 0.8,
      }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const backInDown = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({
        opacity: 0.7,
        transform: 'translateY(-1200px) scale(0.7)',
        offset: 0,
      }),
      style({
        opacity: 0.7,
        transform: 'translateY(0px) scale(0.7)',
        offset: 0.8,
      }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const backInLeft = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({
        opacity: 0.7,
        transform: 'translateX(-2000px) scale(0.7)',
        offset: 0,
      }),
      style({
        opacity: 0.7,
        transform: 'translateX(0px) scale(0.7)',
        offset: 0.8,
      }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const backInRight = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({
        opacity: 0.7,
        transform: 'translateX(2000px) scale(0.7)',
        offset: 0,
      }),
      style({
        opacity: 0.7,
        transform: 'translateX(0px) scale(0.7)',
        offset: 0.8,
      }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

// https://github.com/animate-css/animate.css/tree/main/source/back_exits

export const backOutUp = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1.0, transform: 'scale(1)' }),
      style({ opacity: 0.7, transform: 'translateY(0px) scale(0.7)' }),
      style({ opacity: 0.7, transform: 'translateY(-700px) scale(0.7)' }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const backOutDown = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1.0, transform: 'scale(1)' }),
      style({ opacity: 0.7, transform: 'translateY(0px) scale(0.7)' }),
      style({ opacity: 0.7, transform: 'translateY(700px) scale(0.7)' }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const backOutRight = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1.0, transform: 'scale(1)' }),
      style({ opacity: 0.7, transform: 'translateX(0px) scale(0.7)' }),
      style({ opacity: 0.7, transform: 'translateX(2000px) scale(0.7)' }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const backOutLeft = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1.0, transform: 'scale(1)' }),
      style({ opacity: 0.7, transform: 'translateX(0px) scale(0.7)' }),
      style({ opacity: 0.7, transform: 'translateX(-2000px) scale(0.7)' }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);
