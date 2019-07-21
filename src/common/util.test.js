import { isFunction } from './util';

it('isFunction: true', () => {
  expect(isFunction((a,b) => a + b)).toBe(true);
});

it('isFunction: false', () => {
  expect(isFunction(2)).toBe(false);
  expect(isFunction('test')).toBe(false);
  expect(isFunction({})).toBe(false);
});
