const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  'Bienvenido a un convertidor de moneda básico. En este pequeño programa podras convertir una cantidad de dolares a euros utilizando una tasa de cambio fija\nIngresa la cantidad de dinero que seas convertir: ',
  (dinero) => {
    let euros = dinero * 0.85;
    console.log('Tu cambio seria de: ' + euros + ' euros.');
    rl.close();
  }
);
