// Desafio 11
function generatePhoneNumber(array) {
  let repete = 0;
  let conta = 0;
  let numero = '';
  
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in array){
  if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for(let i2 in array) {
    repete = 0;
    conta = array[i2];
    for(let i3 in array)
      if(conta == array[i3]) {
        repete +=1;
      }
      if (repete >= 3){
        return 'não é possível gerar um número de telefone com esses valores'
      }
  }
 
  numero = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
  
  return numero;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
