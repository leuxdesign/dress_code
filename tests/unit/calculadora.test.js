// tests/unit/calculadora.test.js
// Teste UNITÁRIO: testa lógica pura, sem servidor

const { somar } = require("../../models/calculadora");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 10 + 5 deve retornar 15", () => {
  const resultado = somar(10, 5);
  expect(resultado).toBe(15);
});
