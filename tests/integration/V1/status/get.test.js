test("GET to /api/V1/status should return 200", async () => {
  // Faz uma requisição HTTP real para a API
  const response = await fetch("http://127.0.0.1:3000/api/V1/status");

  // Verifica se o status HTTP retornado é 200 (OK)
  expect(response.status).toBe(200);
});
