const numerios = [1,2,3,4];

// numero.push(5);
// console.log(numeros);




// const pessoa = {
//     nome: "joao",
//     idade: 5,
//     profissão:"Arquiteto",
//     saudacao: function() {
//         console.log()
//     }
// }

//   console.log(pessoa)
//   console.log(pessoa.nome)
//   console.log(pessoa["nome"])

//   pessoa.nome = "adriana"

//   delete pessoa.profissao;

//  pessoa.saudacao()

//  console.log(objeto.nome)


/// estruturas de repetição :

// for ( let i = 0; i<5; i++) {
//     console.log(i);
// }

// let i = o;
// while( i<5) {
//     console.log(i)
//     i++;
// }

// let i = o
// do {
//     console.log(i)
//  i++
// }
// while(I<5)



const pessoas = [
 {
nome: "Euclides",
idade: 22,
profissao: "Analista"
},
{
    nome: "joao",
    idade: 35,
    profissao: "Analista "
},
    {
        nome: "fulano",
        idade: 22,
        profissao: "fofoqueiro "
        },
        {
            nome: "sicrano",
            idade: 24,
            profissao: "contator "
            }
        ]

  for ( let contador = 0; contador < pessoas.length; contador ++ ) {

    if (pessoas[contador].nome != 'Euclides'){
        console.log(pessoas[contador])
    }
  }    
  
//   pessoas.map((pessoa) => {
//     if (pessoa.idade > 22) {
//         console.log(pessoa);
//     }
//   })