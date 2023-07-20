import '../styles/App.css';
import '../styles/Home.css';
import Axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
const logotipo = "images/logotipo.png";
const lupa = "images/lupa.png";

function Home() {

  // Criando a lista de produtos que serão coletados do banco de dados para o frontend
  // Assim como, criando uma função definir o estado da lista
  const [listaDeProdutos, setListaDeProdutos] = useState([]);


  // Função para que, toda vez que a janela for atualizada, o frontend coletar os produtos do banco de dados
  useEffect(() => {
    coletarProdutos();
}, []);


  // Função para realizar um "Get" na API do backend a fim de coletar os produtos no banco de dados
  const coletarProdutos = () => {
    Axios.get('http://localhost:3001/produtos').then((resultado) => {
      setListaDeProdutos(resultado.data);
    });
  }


  return (
    <>
      <div className="logoDoSite">
        <img className="imagem" src={logotipo} width="600" height="300" alt="imagem"/>
      </div>

      <div className="caixaDePesquisa">
        <input type="text" className="textoDePesquisa" name="" placeholder="Pesquisar" />
          <a className="pesquisa" href="#" >
            <img src={lupa} height="20" width="20" />
          </a>
      </div>

      <div className="caixa">
      <div className="listaDeProdutos">

        {listaDeProdutos.map((valor) => {

            return  (
                <div className="caixaDoProduto"> 
                  <div className="conteudo">
                    <h4>{valor.nome}</h4>
                    <div className="caixaDaImagem">
                      <img src={valor.imagem} width="200" height="200" alt="imagem"/>
                    </div>
                    <div className="botaoComprar">Comprar: R$ {valor.preco}</div>
                    <p>{valor.categoria}</p>
                    <p>{valor.detalhes}</p>
                    <p>Quantidade: {valor.quantidade}</p>
                  </div>
                </div>
              );
              
          })}
      </div>
      </div>
    </>
  );
}

export default Home;
