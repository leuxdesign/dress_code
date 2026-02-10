// Regra de negócio pura
// NÃO depende de HTTP, Next ou API

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = {
  somar,
  subtrair,
};
