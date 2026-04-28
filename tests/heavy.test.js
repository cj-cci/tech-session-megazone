// 타임아웃을 2분으로 연장
jest.setTimeout(120000); 

describe('Dynamic Splitting: Heavy E2E Test', () => {
  test('Simulate heavy database query and rendering', async () => {
    console.log('🛒 무거운 결제 E2E 테스트 시작... (1분 대기)');
    
    // 1분(60,000ms) 대기
    await new Promise(resolve => setTimeout(resolve, 60000)); 
    
    console.log('✅ 무거운 결제 테스트 완료');
    expect(true).toBe(true);
  });
});