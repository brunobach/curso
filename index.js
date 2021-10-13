const person = [
    {nome: "Bruno",
     nota: 7.0},
    {nome: "Carlos",
     nota: 5.0},
     {nome: "Joao",
     nota: 4.0},
     {nome: "Marcos",
     nota: 8.0},
     {nome: "Diego",
     nota: 9.0},
     {nome: "Ribamar",
     nota: 9.0},
]

const Media = aluno => aluno.nota >= 5
var total = 0;
const Somale = person.reduce((Media,nota => {
    total =+ nota.nota
    const somar = nota.nota + total
    return total;
}))
const somar = person.filter(Media)




console.log(Somale)