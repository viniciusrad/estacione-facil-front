import './index.css';
import { LogoDiv } from '../../components/LogoDiv';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            <LogoDiv text='Home' />
            <div className='home-body'>
                <div className="container-home">
                    <button className="item-menu-home" onClick={() => handleNavigation('/veiculo/cadastro')}>
                        <img src="/img/carro.png" alt="" />
                        <h4>Cadastrar Veículo</h4>
                    </button>
                    <button className="item-menu-home" onClick={() => handleNavigation('/vagas/reservar')}>
                        <img src="/img/reserva_1.png" alt="" />
                        <h4>Reservar Vaga</h4>
                    </button>
                    <button className="item-menu-home" onClick={() => handleNavigation('/pagamento')}>
                        <img src="/img/pagamento-seguro.png" alt="" />
                        <h4>Pagamento</h4>
                    </button>
                </div>
                <div className="container-home">
                    <button className="item-menu-home" onClick={() => handleNavigation('/veiculo/escolher')}>
                        <img src="/img/engarrafamento.png" alt="" />
                        <h4>Escolher Veículo</h4>
                    </button>
                    <button className="item-menu-home" onClick={() => handleNavigation('/agendamentos')}>
                        <img src="/img/reserva_2.png" alt="" />
                        <h4>Agendamentos</h4>
                    </button>
                </div>
                <div className="container-home">
                    <button className="item-menu-home" onClick={() => handleNavigation('/historico')}>
                        <img src="/img/historico.png" alt="" />
                        <h4>Histórico</h4>
                    </button>
                    <button className="item-menu-home" onClick={() => handleNavigation('/usuario/apagar')}>
                        <img src="/img/deletar-usuario.png" alt="" />
                        <h4>Apagar Conta</h4>
                    </button>
                    <button className="item-menu-home" onClick={() => handleNavigation('/usuario/atualizar')}>
                        <img src="/img/processamento-de-dados.png" alt="" />
                        <h4>Atualizar Dados</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}