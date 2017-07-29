import { animation, style, animate, keyframes } from '@angular/animations';
import { DEFAULT_TIMING, transformAxis } from './utils';

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

function bounceInDirection(axis: 'x' | 'y') {
  const translate3d = transformAxis(axis, 'translate3d');

  return function(steps) {
    const params = Object.assign({ timing: DEFAULT_TIMING }, steps);

    return animation(
      animate(
        '{{ timing }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        keyframes([
          style({ opacity: 0, transform: translate3d('a'), offset: 0 }),
          style({ opacity: 1, transform: translate3d('b'), offset: 0.6 }),
          style({ transform: translate3d('c'), offset: 0.75 }),
          style({ transform: translate3d('d'), offset: 0.9 }),
          style({ opacity: 1, transform: 'none', offset: 1 }),
        ])
      ),
      { params }
    );
  };
}

const bounceInY = bounceInDirection('y');
const bounceInX = bounceInDirection('x');

export const bounceInDown = bounceInY({
  a: '-3000px',
  b: '25px',
  c: '-10px',
  d: '5px',
});

export const bounceInUp = bounceInY({
  a: '3000px',
  b: '-25px',
  c: '10px',
  d: '-5px',
});

export const bounceInLeft = bounceInX({
  a: '-3000px',
  b: '25px',
  c: '-10px',
  d: '5px',
});

export const bounceInRight = bounceInX({
  a: '3000px',
  b: '-25px',
  c: '10px',
  d: '-5px',
});

export const bounceOut = animation(
  animate(
    '{{ timing }}s',
    keyframes([
      style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
      style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
      style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55 }),
      style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING } }
);

function bounceOutDirection(axis: 'x' | 'y') {
  const translate3d = transformAxis(axis, 'translate3d');

  if (axis === 'y') {
    return function(steps) {
      const params = Object.assign({ timing: DEFAULT_TIMING }, steps);

      return animation(
        animate(
          '{{ timing }}s',
          keyframes([
            style({ transform: translate3d('a'), offset: 0.2 }),
            style({ opacity: 1, transform: translate3d('b'), offset: 0.4 }),
            style({ opacity: 1, transform: translate3d('c'), offset: 0.45 }),
            style({ opacity: 0, transform: translate3d('d'), offset: 1 }),
          ])
        ),
        { params }
      );
    };
  }

  return function(steps) {
    const params = Object.assign({}, { timing: DEFAULT_TIMING }, steps);

    return animation(
      animate(
        '{{ timing }}s',
        keyframes([
          style({ opacity: 1, transform: translate3d('a'), offset: 0.2 }),
          style({ opacity: 0, transform: translate3d('b'), offset: 1 }),
        ])
      ),
      { params }
    );
  };
}

const bounceOutY = bounceOutDirection('y');
const bounceOutX = bounceOutDirection('x');

export const bounceOutDown = bounceOutY({
  a: '10px',
  b: '-20px',
  c: '-20px',
  d: '2000px',
});

export const bounceOutUp = bounceOutY({
  a: '-10px',
  b: '20px',
  c: '20px',
  d: '-2000px',
});

export const bounceOutLeft = bounceOutX({
  a: '20px',
  b: '-2000px',
});

export const bounceOutRight = bounceOutX({
  a: '-20px',
  b: '2000px',
});
