const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello CircleCI!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// 테스트 환경이 아닐 때만 서버를 실행하도록 처리
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;