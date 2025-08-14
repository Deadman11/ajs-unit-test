import { getHealthStatus } from "../index.js";

test('health > 50', () => {
  expect(getHealthStatus({name: 'Маг', health: 90})).toBe('healthy');
});

test('50 <= health >= 15', () => {
  expect(getHealthStatus({name: 'Танк', health: 45})).toBe('wounded');
});

test('health < 15', () => {
  expect(getHealthStatus({name: 'Рога', health: 14})).toBe('critical');
});