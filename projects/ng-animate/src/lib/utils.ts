export function transformAxis(axis: 'x' | 'y', name: string) {
  return function(letter: string): string {
    return axis === 'x'
      ? `${name}({{ ${letter} }}, 0, 0)`
      : `${name}(0, {{ ${letter} }}, 0)`;
  };
}

export const DEFAULT_TIMING = 1;
