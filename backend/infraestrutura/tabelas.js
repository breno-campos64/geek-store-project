// tabelas
// responsável por construir uma tabela com atributos no banco de dados MySQL através da classe "Tabelas"
const moment = require('moment');

class Tabelas {

    // realizando a conexão com o banco de dados e executando métodos iniciais
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaProdutos();
        this.registrarProdutosIniciais();
    }

    // método responsável por criar uma tabela no banco de dados com os atributos: 
    // nome, preco, categoria, quantidade, dataDeCriacao e detalhes"
    criarTabelaProdutos() {
        const sql = 
        "CREATE TABLE IF NOT EXISTS produtos " +
        "(id int NOT NULL AUTO_INCREMENT, " +
        "nome varchar(50) NOT NULL, " + 
        "preco float NOT NULL, " +
        "categoria varchar(20) NOT NULL, " +
        "quantidade int, " +
        "dataDeCriacao datetime NOT NULL, " +
        "detalhes text, " +
        "imagem text, " +
        "PRIMARY KEY(id))";

        // executando a query no banco de dados
        this.conexao.query(sql, erro => {
            if (erro)
                console.log(erro);
            else 
                console.log("Tabela 'produtos' criada com sucesso");
        })
    }

    // método responsável por registrar 10 produtos no banco de dados logo após a tabela ser criada
    registrarProdutosIniciais() {
        const dataDeCriacao = moment().format('YYYY-MM-DD HH:mm:ss');

        const vetorDeNomes = ['Chaveiro do Batman  - DC', 'Boneco Malenia - Elden Ring', 'Power Bank Pokébola Pokemon', 
                             'Pelúcia da Nezuko - Demon Slayer', 'Boneco Deadpool - Marvel', 
                             'Yu-Gi-Oh! Deck Estrutural - Mechanized Madness',
                             'Eevee de Pelúcia', 'Mousepad Naruto', 'Mangá The Promised Neverland Vol 1', 
                             'Caneca do Superman - DC'];

        const vetorDePrecos = [24.99, 239.99, 82.39, 58.59, 348.49, 64.99, 69.99, 14.99, 49.99, 39.99];

        const vetorDeQuantidades = [8, 1, 11, 10, 3, 42, 16, 6, 14, 5];

        const vetorDeCategorias = ['Acessório', 'Action Figure', 'Acessório', 'Pelúcia', 'Action Figure', 'Cards', 'Pelúcia', 
                                  'Acessório', 'Livro', 'Cozinha'];

        const vetorDeDetalhes = ['Material: Borracha, Dimensões: 13cm x 3,5 cm', 
                                'Material: Resin, Dimensões: 17cm x 20cm', 
                                'Material: Metal, Dimensões: 10cm x 10cm',
                                'Material: Algodão, Dimensões: 26cm x 13cm',
                                'Material PVC, Dimensões: 26cm x 10cm',
                                'Marca: Konami',
                                'Material: Algodão, Dimensões: 20cm x 14cm',
                                'Material: Plástico, Dimensões: 20cm x 20cm',
                                'Editora: Panin, 192 páginas, Dimensões: 20cm x 14cm',
                                'Material: Cerâmica, Dimensões: 10cm x 13 cm, Capacidade: 300 ml'];

        const vetorDeImagens = ["images/chaveiroBatman.png", "images/bonecoMalenia.png", 
                               "images/powerBlankPokebola.png", "images/peluciaNezuko.png", 
                               "images/bonecoDeadpool.png", "images/yugiohDeckEstrutural.png", 
                               "images/peluciaEevee.png", "images/mousepadNaruto.png",
                               "images/mangaPromisedNeverlandVol1.png", "images/canecaSuperman.png"];                          
      
        /*for (let i = 0; i < 10; i++) {
            let sql = "INSERT INTO produtos (nome, preco, quantidade, dataDeCriacao, categoria, detalhes) " +
                    "SELECT * FROM (SELECT '" + vetorDeNomes[i] + 
                    "', " + vetorDePrecos[i] + 
                    ", " + vetorDeQuantidades[i] + 
                    ", '" + dataDeCriacao + 
                    "', '" + vetorDeCategorias[i] +
                    "', '" + vetorDeDetalhes[i] + 
                    "') AS tmp WHERE NOT EXISTS ( SELECT nome FROM produtos WHERE nome = '" + vetorDeNomes[i] + 
                    "') LIMIT 1;";

            this.conexao.query(sql, erro => {
                if (erro) console.log(erro);
            })
        }*/

        for (let i = 0; i < 10; i++) {
            let sql = "INSERT INTO produtos (nome, preco, quantidade, dataDeCriacao, categoria, detalhes, imagem) " +
                    "SELECT * FROM (SELECT '" + vetorDeNomes[i] + 
                    "', " + vetorDePrecos[i] + 
                    ", " + vetorDeQuantidades[i] + 
                    ", '" + dataDeCriacao + 
                    "', '" + vetorDeCategorias[i] +
                    "', '" + vetorDeDetalhes[i] + 
                    "', '" + vetorDeImagens[i] + 
                    "') AS tmp WHERE NOT EXISTS ( SELECT nome FROM produtos WHERE nome = '" + vetorDeNomes[i] + 
                    "') LIMIT 1;";

            this.conexao.query(sql, erro => {
                if (erro) console.log(erro);
            })
        }
    }
}

module.exports = new Tabelas;