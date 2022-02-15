// alert("hola");

let libro = 0;
let cantidadLibros = 0;
let envio = 0;
let total = 0;

function comprarLibros() {
  while (isNaN(libro) || libro == 0 || libro > 4) {
    libro = parseInt(
      prompt(
        "¿Que libro le gustaria comprar? Introduce el numero:\n 1:empresas $1000, 2: sociedades $2000, 3: familia $500, 4: comercio $3000"
      )
    );
  }
  while (isNaN(cantidadLibros) || cantidadLibros == 0) {
    cantidadLibros = parseInt(
      prompt("¿Cuantos libros quiere comprar? (solo numeros)")
    );
  }
  switch (libro) {
    case 1:
      libro = "empresas $1000";
      total += 1000 * cantidadLibros;
      break;
    case 2:
      libro = "sociedades $2000";
      total += 2000 * cantidadLibros;
      break;
    case 3:
      libro = "familia $500";
      total += 500 * cantidadLibros;
      break;
    case 4:
      libro = "comercio $3000";
      total += 3000 * cantidadLibros;
      break;
  }
}

function pagarEnvio() {
  envio = confirm("¿Te gustaria recibir el libro en tu domicilio?");

  if (envio) {
    envio = total + 500;
    total += envio;
  } else {
    envio = 0;
  }
}

alert("Bienvenido a la librería del estudio");

comprarLibros();
pagarEnvio();

alert(`
    Detalle de compra: 

    - ${cantidadLibros} x ${libro}
    - envio: $${envio}
    Total = $${total} 
`);

const arr1 = new Array("familia", "sociedades", "comercio", "empresas", "sucesiones")

console.log("recorriendo un array con un for");

for(let i=0; i<arr1.length; i+=1){
    document.write(arr1[i] + "<br>");
}