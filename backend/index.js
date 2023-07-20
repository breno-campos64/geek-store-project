// index
// responsável por ligar o servidor na porta 3000

const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if (erro) 
        console.log(erro);
    else 
        console.log('Conectado com sucesso');   

        // conectando com as tabelas e iniciando a aplicação com o express
        Tabelas.init(conexao);     
        const app = customExpress();
        app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
})