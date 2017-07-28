import { animation, style, animate, keyframes } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const zoomIn = animation(
  [
    animate(
      '{{ timing }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)',
          offset: 0.2,
        }),
        style({
          opacity: 1,
          offset: 0.5,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING },
  }
);

export const zoomIn3d = animation(
  [
    animate(
      '{{ timing }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      keyframes([
        style({
          opacity: 0,
          transform:
            'scale3d(.1, .1, .1) translate3d({{ fromX }}, {{ fromY }}, 0)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform:
            'scale3d(.475, .475, .475) translate3d({{ toX }}, {{ toY }}, 0)',
          offset: 0.6,
        }),
      ])
    ),
  ],
  {
    params: {
      timing: DEFAULT_TIMING,
      fromX: '-1000px',
      toX: '10px',
      fromY: 0,
      toY: 0,
    },
  }
);

export const zoomOut = animation(
  [
    animate(
      '{{ timing }}s',
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
    params: { timing: DEFAULT_TIMING },
  }
);

export const zoomOut3d = animation(
  [
    animate(
      '{{ timing }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      keyframes([
        style({
          opacity: 1,
          transform:
            'scale3d(.475, .475, .475) translate3d({{ fromX }}, {{ fromY }}, 0)',
          offset: 0.4,
        }),
        style({
          opacity: 0,
          transform: 'scale3d(.1, .1, .1) translate3d({{ toX }}, {{ toY }}, 0)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: {
      timing: DEFAULT_TIMING,
      fromX: 0,
      toX: 0,
      fromY: '60px',
      toY: '-2000px',
    },
  }
);
