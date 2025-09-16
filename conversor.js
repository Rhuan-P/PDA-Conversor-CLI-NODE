const args = process.argv.slice(2);

if (args.length < 3) {
  console.log("Uso: node conversor.js <valor> <unidade_origem> <unidade_destino>");
  process.exit(1);
}

const valor = parseFloat(args[0]);
const origem = args[1].toLowerCase();
const destino = args[2].toLowerCase();

function converter(valor, origem, destino) {
  // Distância
  if (origem === "km" && destino === "milhas") {
    return valor * 0.621371;
  }
  if (origem === "milhas" && destino === "km") {
    return valor / 0.621371;
  }

  // Temperatura
  if (origem === "celsius" && destino === "fahrenheit") {
    return (valor * 9) / 5 + 32;
  }
  if (origem === "fahrenheit" && destino === "celsius") {
    return ((valor - 32) * 5) / 9;
  }

  return null; // conversão não suportada
}

const resultado = converter(valor, origem, destino);

if (resultado === null) {
  console.log(`Conversão de ${origem} para ${destino} não é suportada.`);
} else {
  console.log(`${valor} ${origem} é igual a ${resultado.toFixed(2)} ${destino}.`);
}
