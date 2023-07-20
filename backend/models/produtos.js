// produtos
// responsável por definir os métodos da classe Produtos que serão chamados pelas requisições

const moment = require('moment');
const conexao = require('../infraestrutura/conexao');
 
class Produto {

    // método para adicionar um produto no banco de dados
    adicionarProduto(produto, res) {
        const dataDeCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const nomeASerValidado = produto.nome.length >= 3; 
        const precoASerValidado = produto.preco > 0;

        const validacoes = [          
            {
                nome: "nome",
                valido: nomeASerValidado,
                mensagem: "O nome do produto deve ter pelo menos 3 caracteres"
            },
            {
                nome: "preco",
                valido: precoASerValidado,
                mensagem: "O preço de um produto precisa ser acima de 0"
            }
        ]

        // se a constante "nomeASerValidado" for falsa, ou seja, o nome do produto tiver menos que 3 letras,
        // o array "existemErros" vai possuir o valor 1 (pois ocorreu um erro e o mesmo foi adicionado no array), 
        // o que irá não irá resultar na inserção de um produto na tabela
        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if (existemErros) {
            res.status(400).json(erros);
        } else {
            const produtoFinalizado = {...produto, dataDeCriacao}   

            const sql = 'INSERT INTO produtos SET ?';
 
            conexao.query(sql, produtoFinalizado, (erro, resultados) => {
                if (erro)
                    res.status(400).json(erro);
                else 
                    res.status(201).json(produto);  
            })
        }
    }
    
    // método para apresentar todos os produtos da tabela de produtos do banco de dados
    listarProdutos(res) {
        const sql = "SELECT * FROM produtos";

        conexao.query(sql, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        })  
    }

    // método para pesquisar um produto na tabela através de um id
    buscarProdutoPorId(id, res) {
        const sql = `SELECT * FROM produtos WHERE id=${id}`;
 
        conexao.query(sql, (erro, resultados) => { 
            const produto = resultados[0];
                if(erro) { 
                    res.status(400).json(erro);
                } else {
                    res.status(200).json(produto);
                }
        });
    }

    // método para alterar um produto na tabela através de um id
    alterarProduto(id, valores, res) {
        const sql = "UPDATE produtos SET ? WHERE id=?";

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json({...valores, id});
        })
    }  

    // método para remover um produto na tabela através de um id
    deletarProduto(id, res) {
        const sql = "DELETE FROM produtos WHERE id=?";

        conexao.query(sql, id, (erro, resultados) => {
            if(erro)
                res.status(400).json(erro);
            else 
                res.status(200).json({id});
        })
    }
}

module.exports = new Produto;