/* Definir um array de objetos, cuja chaves serão 
id, título, autor, quantidade. Cada item representa um livro disponível na
livraria */

const estoque = [
    {id: 2035, titulo: 'Harry Potter', autor: 'Maria Silva', quantidade: 12},
    {id: 3547, titulo: 'Senhor dos Anéis', autor: 'José Souza', quantidade: 15},
    {id: 4426, titulo: 'O Livro das Fadas', autor: 'Mario Santos', quantidade: 20},
    {id: 9139, titulo: 'O Programador Pragmático', autor: 'João Lima', quantidade: 7}
];

/* Criar função para adicionar um livro ao estoque. Essa função recebe como parâmetro
título, autor e quantidade */
const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    })
}

adicionaLivro(3437, 'Código Limpo', 'Tio Bob', 18);

/* Criar função para remover um item do estoque. Esta função recebe como parâmetro
o id
*/
const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++) {
            if(estoque[indice].id === idDoLivro) {
                console.log(`O livro de id ${idDoLivro} foi removido`);
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`O livro de id ${idDoLivro} não foi encontrado`);
    }
}
removeLivro(4426);

/* Criar uma função para atualizar a quantidades de um livro do estoque. Esta função recebe como parâmetro
id, novaQuantidade
*/
const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for (let livro of estoque) {
            if(livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log(`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQuantidade}`);
                break;
            }
        }
    } else {
        console.log(`O id ${idDoLivro} não foi localizado no estoque`)
    }
}

atualizaQuantidade(2035, 1200);

/* Criar uma função que lista os livros que estão no array */
const listarLivros = () => {
    if(estoque.length === 0) {
        console.log('O estoque está vazio')
    } else {
        console.log(`O estoque possui ${estoque.length} títulos.`)
        for (let livro of estoque) {
            console.log(`
                ID: ${livro.id}
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade: ${livro.quantidade}
                `)
        }
    }
}

adicionaLivro(1972, 'Marketing Digital', 'Mauro Pereira', 4600);
adicionaLivro(8537, 'Refatoração', 'Erick Oliveira', 8135);
adicionaLivro(7225, 'A Bíblia da Java', 'Zé da Silva', 2000);


const listaNovosLivros = [
    {id: 5589,titulo: '1984', autor:'Aline Vieira', quantidade: 1500},
    {id: 8537,titulo: 'Marketing Digital', autor:'Mauro Pereira', quantidade: 4600},
    {id: 1972, titulo: 'Refatoração', autor: 'Erick Oliveira', quantidade: 8135},
    {id:7225, titulo: 'A Bíblia do Java', autor: 'Zé da Silva', quantidade: 2000},
    {id:7224, titulo: 'A Bíblia do JavaScript', autor: 'Zé da Silva', quantidade: 2000}
]

const adicionaDaLista = (listaNovos) => {
    for (let livro of listaNovos) {

        const { id, titulo, autor, quantidade } = livro
        adicionaLivro(id, titulo, autor, quantidade)
    }
    console.log(`${listaNovos.length} livros adicionados`);
}

adicionaDaLista(listaNovosLivros);
console.log(estoque);

const executaEMostraLista = (acao, mostrLista) => {
    console.log('Vou executar');
    acao();
    console.log('executei');
    mostrLista();
}

// executaEMostraLista(() => adicionaLivro(3437, 'Código Limpo', 'Tio Bob', 18), () => listarLivros())

executaEMostraLista(() => adicionaLivro(3437, 'Código Limpo', 'Tio Bob', 18), listarLivros)