import React, { useState, useContext } from 'react';
import MessagePopUp from '../../components/MessagePopUp';
import { LogoDiv } from '../../components/LogoDiv';
import { FaUserPlus, FaCheckCircle, FaList, FaCalendarCheck } from 'react-icons/fa';

import { UsuarioContext } from '../../context/UsuarioContext';

function HomeAdmin({ handleNavigation }) {

    const { tipoUsuario } = useContext(UsuarioContext);


    return (
        <>
            <div>
                <LogoDiv text='Home' />
                <div className='home-body'>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/usuario/cadastro-admin')}>
                            <FaUserPlus size={42} />
                            <h4>Cadastrar Admin</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/aprovar')}>
                            <FaCheckCircle size={42} />
                            <h4>Aprovar Vaga</h4>
                        </button>
                    </div>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/listar')}>
                            <FaList size={42} />
                            <h4>Listar Vagas</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/disponibilidade')}>
                            <FaCalendarCheck size={42} />
                            <h4>Disponibilidade de Vagas</h4>
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