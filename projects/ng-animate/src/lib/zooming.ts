import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { DEFAULT_TIMING, transformAxis } from './utils';

export const zoomIn = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'scale3d(1, 1, 1)',
          offset: 0.5,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

function zoomInDirection(axis: 'x' | 'y') {
  const translate3d = transformAxis(axis, 'translate3d');

  return function(steps) {
    const params = Object.assign({ timing: DEFAULT_TIMING, delay: 0 }, steps);

    return animation(
      animate(
        '{{ timing }}s {{ delay }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)',
        keyframes([
          style({
            opacity: 0,
            transform: `scale3d(.1, .1, .1) ${translate3d('a')}`,
            offset: 0,
          }),
          style({
            opacity: 1,
            transform: `scale3d(.475, .475, .475) ${translate3d('b')}`,
            offset: 0.6,
          }),
        ])
      ),
      { params }
    );
  };
}

const zoomInY = zoomInDirection('y');
const zoomInX = zoomInDirection('x');

export const zoomInDown = zoomInY({
  a: '-1000px',
  b: '10px',
});
export const zoomInUp = zoomInY({
  a: '1000px',
  b: '-10px',
});
export const zoomInLeft = zoomInX({
  a: '-1000px',
  b: '10px',
});
export const zoomInRight = zoomInX({
  a: '1000px',
  b: '-10px',
});

export const zoomOut = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          offset: 0,
        }),
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)',
          offset: 0.5,
        }),
        style({
          opacity: 0,
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

function zoomOutDirection(axis: 'x' | 'y') {
  const translate3d = transformAxis(axis, 'translate3d');

  return function(steps) {
    const params = Object.assign({ timing: DEFAULT_TIMING, delay: 0 }, steps);

    return animation(
      animate(
        '{{ timing }}s {{ delay }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)',
        keyframes([
          style({
            opacity: 1,
            transform: `scale3d(.475, .475, .475) ${translate3d('a')}`,
            offset: 0.4,
          }),
          style({
            opacity: 0,
            transform: `scale3d(.1, .1, .1) ${translate3d('b')}`,
            offset: 1,
          }),
        ])
      ),
      { params }
    );
  };
}

const zoomOutY = zoomOutDirection('y');
const zoomOutX = zoomOutDirection('x');

export const zoomOutDown = zoomOutY({
  a: '-60px',
  b: '2000px',
});
export const zoomOutUp = zoomOutY({
  a: '60px',
  b: '-2000px',
});
export const zoomOutLeft = zoomOutX({
  a: '42px',
  b: '-2000px',
});
export const zoomOutRight = zoomOutX({
  a: '-42px',
  b: '2000px',
});
