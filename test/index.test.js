const { handler } = require('../index');

test('Sample test', async () => {
  const result = await handler({});
  expect(result.statusCode).toBe(200);
  expect(result.body).toBe(JSON.stringify({ message: "Hello from Lambda!" }));
});
