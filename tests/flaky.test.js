describe('Smarter Testing: Flaky Test Detection', () => {
    test('Simulate an unreliable API or network timeout', () => {
      // 0.0 ~ 1.0 사이의 난수 생성 (30% 확률로 에러 발생)
      const successRate = Math.random();
      console.log(`[네트워크 상태 시뮬레이션] 지연율: ${successRate}`);
  
      if (successRate < 0.3) {
        console.error('❌ 간헐적 네트워크 타임아웃 발생 (Flaky 시뮬레이션)');
      }
      
      expect(successRate).toBeGreaterThanOrEqual(0.3);
    });
  });