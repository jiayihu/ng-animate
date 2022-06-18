import { animate, animation, AnimationReferenceMetadata, keyframes, style } from '@angular/animations';

import { DEFAULT_TIMING } from './utils';

export function fadeXY(
  fromX: string | 0,
  fromY: string | 0,
  toX: string | 0,
  toY: string | 0,
  fromOpacity = 0,
  toOpacity = 1
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: '{{ fromOpacity }}',
          transform: 'translate3d({{ fromX }}, {{ fromY }}, 0)',
          offset: 0,
        }),
        style({
          opacity: '{{ toOpacity }}',
          transform: 'translate3d({{ toX }}, {{ toY }}, 0)',
          offset: 1,
        }),
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        fromX,
        toX,
        fromY,
        toY,
        fromOpacity,
        toOpacity,
      },
    }
  );
}

export function fadeInX(
  a: string | 0,
  b: string | 0,
  fromOpacity = 0,
  toOpacity = 1
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: '{{ fromOpacity }}',
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0,
        }),
        style({
          opacity: '{{ toOpacity }}',
          transform: 'translate3d({{ b }}, 0, 0)',
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
        fromOpacity,
        toOpacity,
      },
    }
  );
}

export function fadeInY(
  a: string | 0,
  b: string | 0,
  fromOpacity = 0,
  toOpacity = 1
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: '{{ fromOpacity }}',
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0,
        }),
        style({
          opacity: '{{ toOpacity }}',
          transform: 'translate3d(0, {{ b }}, 0)',
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
        fromOpacity,
        toOpacity,
      },
    }
  );
}

export const fadeIn = fadeInX(0, 0);
export const fadeInDown = fadeInY('-100%', 0);
export const fadeInDownBig = fadeInY('-2000px', 0);
export const fadeInUp = fadeInY('100%', 0);
export const fadeInUpBig = fadeInY('2000px', 0);
export const fadeInLeft = fadeInX('-100%', 0);
export const fadeInLeftBig = fadeInX('-2000px', 0);
export const fadeInRight = fadeInX('100%', 0);
export const fadeInRightBig = fadeInX('2000px', 0);

export const fadeInTopLeft = fadeXY('-100%', '-100%', 0, 0);
export const fadeInTopRight = fadeXY('100%', '-100%', 0, 0);
export const fadeInBottomLeft = fadeXY('-100%', '100%', 0, 0);
export const fadeInBottomRight = fadeXY('100%', '100%', 0, 0);

export function fadeOutX(
  a: string | 0,
  b: string | 0
): AnimationReferenceMetadata {
  return fadeInX(a, b, 1, 0);
}

export function fadeOutY(
  a: string | 0,
  b: string | 0
): AnimationReferenceMetadata {
  return fadeInY(a, b, 1, 0);
}

export const fadeOut = fadeOutX(0, 0);
export const fadeOutDown = fadeOutY('-100%', 0);
export const fadeOutDownBig = fadeOutY('-2000px', 0);
export const fadeOutUp = fadeOutY('100%', 0);
export const fadeOutUpBig = fadeOutY('2000px', 0);
export const fadeOutLeft = fadeOutX('-100%', 0);
export const fadeOutLeftBig = fadeOutX('-2000px', 0);
export const fadeOutRight = fadeOutX('100%', 0);
export const fadeOutRightBig = fadeOutX('2000px', 0);

export const fadeOutTopLeft = fadeXY('-100%', '-100%', 0, 0, 1, 0);
export const fadeOutTopRight = fadeXY('100%', '-100%', 0, 0, 1, 0);
export const fadeOutBottomLeft = fadeXY('-100%', '100%', 0, 0, 1, 0);
export const fadeOutBottomRight = fadeXY('100%', '100%', 0, 0, 1, 0);

export function slideX(
  a: string | 0,
  b: string | 0
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0,
        }),
        style({
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1,
        }),
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}

export function slideY(
  a: string | 0,
  b: string | 0
): AnimationReferenceMetadata {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0,
        }),
        style({
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1,
        }),
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}

export const slideInUp = slideY('-100%', 0);
export const slideInDown = slideY('100%', 0);
export const slideInLeft = slideX('-100%', 0);
export const slideInRight = slideX('100%', 0);
export const slideOutUp = slideY(0, '-100%');
export const slideOutDown = slideY(0, '100%');
export const slideOutLeft = slideX(0, '-100%');
export const slideOutRight = slideX(0, '100%');
