// 인위적인 지연을 발생시키는 헬퍼 함수
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('API Endpoints (Simulated)', () => {
  test('GET / returns correct message', async () => {
    // 무거운 DB 쿼리 및 네트워크 지연 시뮬레이션 (4초)
    await sleep(4000); 
    const mockResponse = { message: 'Hello CircleCI!' };
    expect(mockResponse.message).toBe('Hello CircleCI!');
  });

  test('GET /health returns UP status', async () => {
    // 가벼운 상태 체크 시뮬레이션 (1초)
    await sleep(1000); 
    const mockResponse = { status: 'UP' };
    expect(mockResponse.status).toBe('UP');
  });
});