let listFrutas = [
    'Banana',
    'Morango',
    'Goiaba',
    'Laranja'
]
let ulMercado = document.querySelector('.list-itens')

function createElementeItens(list){
    for(let i = 0; i < list.length; i++){

        let listaProdutos = document.createElement('li') //crie uma li
        listaProdutos.innerText = list[i]  //use o template string para acessar o elemento da lista
        ulMercado.appendChild(listaProdutos) // insira a li dentro da lista
    }
}
createElementeItens(listFrutas)