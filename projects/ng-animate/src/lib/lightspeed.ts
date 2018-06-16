import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const lightSpeedIn = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0) skewX(0)',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);

export const lightSpeedOut = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-out',
    keyframes([
      style({
        opacity: 1,
        offset: 0,
      }),
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        offset: 1,
      }),
    ])
  ),
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);
