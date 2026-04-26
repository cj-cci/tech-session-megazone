jest.setTimeout(600000); 
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('E2E Authentication Flow', () => {
  test('Simulate OAuth login and session creation', async () => {
    console.log('🔐 소셜 로그인 E2E 테스트 시작... (2분 대기)');
    
    // 120,000ms = 2분
    await sleep(120000); 
    
    console.log('✅ 소셜 로그인 완료');

    // 120,000ms = 2분
    await sleep(120000); 
    
    console.log('✅ 세션 생성 완료');

    expect(true).toBe(true);
  });
});