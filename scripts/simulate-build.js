console.log("🚀 무거운 프론트엔드/엔터프라이즈 빌드 시뮬레이션을 시작합니다...");

// 목표 메모리 할당량: 3000MB (약 3GB)
const targetMemoryMB = 3000; 
const memoryHog = [];

try {
  for (let i = 1; i <= targetMemoryMB / 50; i++) {
    // 50MB씩 컨테이너의 메모리를 강제로 점유합니다.
    memoryHog.push(Buffer.alloc(1024 * 1024 * 50)); 
    console.log(`[빌드 진행 중] 메모리 할당... ${i * 50} MB 사용 중`);
    
    // 약간의 지연을 주어 로그가 올라가는 것을 시각적으로 보여줍니다.
    const start = Date.now();
    while (Date.now() - start < 50) {} 
  }

  console.log("✅ 3GB 메모리 할당 성공! 에셋 컴파일을 완료했습니다.");
  process.exit(0);

} catch (error) {
  console.error("❌ 빌드 중 치명적인 에러 발생:", error);
  process.exit(1);
}