const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('String Manipulations', () => {
  test('concatenates two strings', async () => {
    // 텍스트 파싱 시뮬레이션 (1.5초)
    await sleep(1500); 
    expect('Circle' + 'CI').toBe('CircleCI');
  });

  test('converts string to uppercase', async () => {
    // 텍스트 변환 시뮬레이션 (2.5초)
    await sleep(2500); 
    expect('hello'.toUpperCase()).toBe('HELLO');
  });
});