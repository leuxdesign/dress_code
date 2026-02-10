test("GET /api/v1/status retorna status 200 e body esperado", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  // contrato HTTP
  expect(response.status).toBe(200);
  expect(response.headers.get("content-type")).toContain("application/json");

  // contrato de dados
  const body = await response.json();
  expect(body).toEqual({ status: "ok" });
});
