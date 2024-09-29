
import './index.css';
import { LogoDiv } from '../../components/LogoDiv';

export const Home = () => {
    return (
        <div>
          <LogoDiv pageText='Home' />
            <div className="container-home">
                <div className="item-menu-home">
                    <img src="/img/carro.png" alt="" />
                    <h4>Cadastrar Veículo</h4>
                </div>
                <div className="item-menu-home">
                    <img src="/img/reserva_1.png" alt="" />
                    <h4>Reservar Vaga</h4>
                </div>
                <div className="item-menu-home">
                    <img src="/img/pagamento-seguro.png" alt="" />
                    <h4>Pagamento</h4>
                </div>

            </div>
            <div className="container-home">
                <div className="item-menu-home">
                    <img src="/img/engarrafamento.png" alt="" />
                    <h4>Escolher Veículo</h4>
                </div>
                <div className="item-menu-home">
                    <img src="/img/reserva_2.png" alt="" />
                    <h4>Agendamentos</h4>
                </div>
            </div>
            <div className="container-home">
                <div className="item-menu-home">
                    <img src="/img/historico.png" alt="" />
                    <h4>Histõrico</h4>
                </div>
                <div className="item-menu-home">
                    <img src="/img/deletar-usuario.png" alt="" />
                    <h4>Apagar Conta</h4>
                </div>
                <div className="item-menu-home">
                    <img src="/img/processamento-de-dados.png" alt="" />
                    <h4>Atualizar Dados</h4>
                </div>

            </div>
        </div>

    )
}