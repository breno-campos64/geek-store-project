import {Link} from 'react-router-dom';
import {useMatch} from 'react-router-dom';
import {useResolvedPath} from 'react-router-dom';


function BarraDeNavegacao() {
    return (
        <nav className="navegacao">
            <Link to="/" className="tituloDoSite">HOME</Link>
            <ul>
                <DetectorDeCaminho to="/cadastro">Cadastro</DetectorDeCaminho>
            </ul>
        </nav>
    )
}


// Função para sinalizar se a página de cadastro está ativa
function DetectorDeCaminho({ to, children, ...props }) {
    const caminhoFinal = useResolvedPath(to);
    const caminhoEstaAtivo = useMatch({path: caminhoFinal.pathname, end: true});

    return (
        <li className={caminhoEstaAtivo ? "ativo" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default BarraDeNavegacao;