import { multiply } from 'rn-use';

it.todo('index.jest');
test('multiply', () => {
  return multiply(1, 2).then((res) => {
    expect(res).toBe(2);
  });
});
