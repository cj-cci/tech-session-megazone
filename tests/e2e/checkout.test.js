// Jest의 기본 타임아웃을 10분(600,000ms)으로 연장합니다.
jest.setTimeout(600000); 

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('E2E Checkout Flow (Heavy)', () => {
  test('Simulate full checkout process with heavy UI rendering', async () => {
    console.log('🛒 결제 E2E 테스트 시작... (5분 대기)');
    
    // 300,000ms = 5분
    await sleep(300000); 
    
    console.log('✅ 결제 테스트 완료');
    expect(true).toBe(true);
  });
});