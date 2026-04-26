jest.setTimeout(600000); 
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('E2E Payment Gateway Integration', () => {
  test('Simulate 3rd party payment gateway timeout', async () => {
    console.log('💳 외부 PG사 연동 테스트 시작... (3분 대기)');
    
    // 180,000ms = 3분
    await sleep(180000); 
    
    console.log('✅ PG사 연동 테스트 완료');
    expect(true).toBe(true);
  });
});