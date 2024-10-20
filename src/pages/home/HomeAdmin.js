import React, { useState, useContext } from 'react';
import MessagePopUp from '../../components/MessagePopUp';
import { LogoDiv } from '../../components/LogoDiv';

import { UsuarioContext } from '../../context/UsuarioContext';

function HomeAdmin({ handleNavigation }) {

    const { tipoUsuario } = useContext(UsuarioContext);


    return (
        <>
            <div>
                <LogoDiv text='Home' />
                <div className='home-body'>
                    <h2>Tipo de Usuário: {tipoUsuario}</h2>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/veiculo/cadastro')}>
                            <img src="/img/carro.png" alt="" />
                            <h4>Cadastrar Veículo</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/reservar')}>
                            <img src="/img/reserva_1.png" alt="" />
                            <h4>Reservar Vaga</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/cartao/cadastro')}>
                            <img src="/img/pagamento-seguro.png" alt="" />
                            <h4>Pagamento</h4>
                        </button>
                    </div>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/veiculo/lista')}>
                            <img src="/img/engarrafamento.png" alt="" />
                            <h4>Escolher Veículo</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/agendamentos/meus-agendamentos')}>
                            <img src="/img/reserva_2.png" alt="" />
                            <h4>Agendamentos</h4>
                        </button>
                    </div>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/historico')}>
                            <img src="/img/historico.png" alt="" />
                            <h4>Histórico</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/usuario/apagar-conta')}>
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
        </>
    );
}

export default HomeAdmin;