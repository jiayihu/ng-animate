import {
  animation,
  style,
  animate,
  keyframes,
  AnimationReferenceMetadata,
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const bounceIn = animation(
  animate(
    '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
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
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export function bounceInY(
  a: string,
  b: string,
  c: string,
  d: string
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 0.6,
        }),
        style({ transform: 'translate3d(0, {{ c }}, 0)', offset: 0.75 }),
        style({ transform: 'translate3d(0, {{ d }}, 0)', offset: 0.9 }),
        style({ opacity: 1, transform: 'none', offset: 1 }),
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b,
        c,
        d,
      },
    }
  );
}

export function bounceInX(
  a: string,
  b: string,
  c: string,
  d: string
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 0.6,
        }),
        style({ transform: 'translate3d({{ c }}, 0, 0)', offset: 0.75 }),
        style({ transform: 'translate3d({{ d }}, 0, 0)', offset: 0.9 }),
        style({ opacity: 1, transform: 'none', offset: 1 }),
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b,
        c,
        d,
      },
    }
  );
}

export const bounceInDown = bounceInY('-3000px', '25px', '-10px', '5px');

export const bounceInUp = bounceInY('3000px', '-25px', '10px', '-5px');

export const bounceInLeft = bounceInX('-3000px', '25px', '-10px', '5px');

export const bounceInRight = bounceInX('3000px', '-25px', '10px', '-5px');

export const bounceOut = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
      style({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.5,
      }),
      style({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.55,
      }),
      style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0, scale: 1.1 } }
);

export function bounceOutY(
  a: string,
  b: string,
  c: string,
  d: string
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({ transform: 'translate3d(0, {{ a }}, 0)', offset: 0.2 }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 0.4,
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ c }}, 0)',
          offset: 0.45,
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ d }}, 0)',
          offset: 1,
        }),
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b,
        c,
        d,
      },
    }
  );
}

export function bounceOutX(a: string, b: string): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0.2,
        }),
        style({
          opacity: 0,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1,
        }),
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}

export const bounceOutDown = bounceOutY('10px', '-20px', '-20px', '2000px');

export const bounceOutUp = bounceOutY('-10px', '20px', '20px', '-2000px');

export const bounceOutLeft = bounceOutX('20px', '-2000px');

export const bounceOutRight = bounceOutX('-20px', '2000px');
