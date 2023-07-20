// produtos
// responsável por definir os tipos de requisições que o servidor tratará

const Produto = require('../models/produtos');

module.exports = app => {

    // método para ler recursos do servidor
    app.get('/produtos', (req, res) => {
        Produto.listarProdutos(res);
    });

    // método para ler um recurso do servidor através de um "id" específico
    app.get('/produtos/:id', (req, res) => { 
        const id = parseInt(req.params.id); // convertendo id para de "string" para "int"
        Produto.buscarProdutoPorId(id, res);
    });

    // método para ler e potencialmente alterar recursos do servidor
    app.post('/cadastro', (req, res) => {
        const produto = req.body;
        Produto.adicionarProduto(produto, res);
    })
     
    // método para atualizar um recurso do servidor através de seu "id"
    app.patch('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id); // convertendo id para de "string" para "int"
        const valores = req.body;  
        Produto.alterarProduto(id, valores, res);
    })
    
    // método para remover um recurso do servidor através de seu "id"
    app.delete('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id);  // convertendo id para de "string" para "int"
        Produto.deletarProduto(id, res);
    })
}