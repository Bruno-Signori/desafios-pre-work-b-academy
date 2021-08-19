//Exercício 01 - Imutabilidade

const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

// aqui adiciono os dados de john a jane conservando a imutabilidade, em vez do metodo push utilizamos o spread operators [...]
const jane = {
  ...john,
  name: 'jane',
  hobbies: ['MuayThai', 'Programming', ...john.hobbies ],
}


console.log('John:', john)
console.log('Jane:', jane)
