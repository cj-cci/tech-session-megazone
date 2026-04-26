// scripts/simulate-build.js
console.log("🚀 무거운 프론트엔드/엔터프라이즈 빌드 시뮬레이션을 시작합니다...");

// 목표 메모리 할당량: 5000MB (5GB)
// small(2GB)에서는 스왑을 고려해도 무조건 터지고, large(8GB)에서는 성공하는 최적의 수치입니다.
const targetMemoryMB = 5000; 
const memoryHog = [];

try {
  for (let i = 1; i <= targetMemoryMB / 50; i++) {
    // 핵심 변경점: Buffer.alloc 시 두 번째 인자로 'x'를 전달하여
    // 빈 공간이 아닌 실제 데이터로 50MB씩 꽉꽉 채웁니다. (물리 RAM 강제 점유)
    memoryHog.push(Buffer.alloc(1024 * 1024 * 50, 'x')); 
    
    console.log(`[빌드 진행 중] 의존성 패키지 및 에셋 로드 중... ${i * 50} MB 점유 완료`);
    
    // 로그 출력을 시각적으로 보여주기 위한 약간의 지연
    const start = Date.now();
    while (Date.now() - start < 50) {} 
  }

  console.log("✅ 5GB 메모리 할당 성공! 무거운 빌드가 문제없이 완료되었습니다.");
  process.exit(0);

} catch (error) {
  // OS가 프로세스를 죽여버리기 때문에 이 에러 메시지는 출력되지 않고 
  // Exit code 137(OOM)과 함께 컨테이너가 즉사합니다.
  console.error("❌ 빌드 에러:", error);
  process.exit(1);
}