import '../styles/App.css';
import '../styles/Cadastro.css';
import Axios from 'axios';
import {useState} from 'react';

function Cadastro() {

  // Criando variáveis e funções para alterarem os estados dessas variáveis
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [detalhes, setDetalhes] = useState("");
  const [imagem, setImagem] = useState("");

  
  // Função para realizar um "Post" na API do backend contendo dados coletados no formulário abaixo
  const cadastrarProduto = () => {
    Axios.post('http://localhost:3001/cadastro', 
            { 
              nome: nome, 
              preco: preco, 
              categoria: categoria, 
              quantidade: quantidade, 
              detalhes: detalhes,
              imagem: imagem,
            }).then(() => {
              console.log('sucesso!');
              return;
            });
  }


  return (
    <>
    <div className="App">
      <div className="caixaDeCadastro">
        <div className="caixaDoTitulo">
          <h3 className="titulo">Cadastrar Novo Produto</h3>
        </div>
    
          <form onSubmit={cadastrarProduto}>
            <input className="inputCadastro" type="text" minlength="3" placeholder="Nome do Produto" onChange={(event) => setNome(event.target.value)} required/>

            <input className="inputCadastro" type="number" step="0.01" placeholder="Preço" onChange={(event) => setPreco(event.target.value)} required/>

            <input className="inputCadastro" type="text" placeholder="Categoria" onChange={(event) => setCategoria(event.target.value)} required/>

            <input className="inputCadastro" type="number" placeholder="Quantidade" onChange={(event) => setQuantidade(event.target.value)}/>

            <input className="inputCadastro" type="text" placeholder="Detalhes" onChange={(event) => setDetalhes(event.target.value)}/>

            <input className="inputCadastro" type="text" placeholder="Caminho da Imagem" onChange={(event) => setImagem(event.target.value)} required/>

            <input type="submit" value="Cadastrar" className="botaoSubmit"/>
          </form>

      </div>
    </div>
    </>
  );
}

export default Cadastro;
