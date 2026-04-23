const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Math Operations', () => {
  test('adds 1 + 2 to equal 3', async () => {
    // 복잡한 연산 시뮬레이션 (2초)
    await sleep(2000); 
    expect(1 + 2).toBe(3);
  });

  test('multiplies 3 * 4 to equal 12', async () => {
    // 복잡한 연산 시뮬레이션 (3초)
    await sleep(3000); 
    expect(3 * 4).toBe(12);
  });
});