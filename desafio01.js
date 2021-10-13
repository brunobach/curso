const carrinho = [
  {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
  {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
  {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
  {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
  {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]


const getFragil = item => item.fragil
const getPrecoQtde = item => item.qtde * item.preco
const mediaPreco = (acc, el, index, ar) => acc + el 

const verificaFragil = carrinho.filter(getFragil)
const totalPreco = carrinho
        .map(getPrecoQtde)
        .reduce(mediaPreco)

console.log(verificaFragil)
console.log(totalPreco)