import { animation, style, animate } from '@angular/animations';

const DEFAULT_TIMING = 1;

/**
 * Does not support timing yet
 */
export const bounce = animation([
  style({ transform: 'translate3d(0, 0, 0)' }),
  animate(
    '0.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    style({ transform: 'translate3d(0, 0, 0)' })
  ),
  animate(
    '0.2s cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    style({ transform: 'translate3d(0, -30px, 0)' })
  ),
  animate(
    '0.13s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    style({ transform: 'translate3d(0, 0, 0)' })
  ),
  animate(
    '0.17s cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    style({ transform: 'translate3d(0, -15px, 0)' })
  ),
  animate('0.2s', style({ transform: 'translate3d(0, -4px, 0)' })),
  animate(
    '0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    style({ transform: 'translate3d(0, 0, 0)' })
  ),
]);

export const fade = animation(
  [
    style({ opacity: '{{ from }}' }),
    animate('{{ timing }}s', style({ opacity: '{{ to }}' })),
  ],
  { params: { from: 1, timing: DEFAULT_TIMING, to: 0 } }
);
