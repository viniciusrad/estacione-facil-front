import React, { useState, useContext } from 'react';
import MessagePopUp from '../../components/MessagePopUp';
import { LogoDiv } from '../../components/LogoDiv';
import { FaUserPlus, FaCheckCircle, FaList, FaCalendarCheck, FaWpforms } from 'react-icons/fa';
import { IoCalendarOutline } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";


import { UsuarioContext } from '../../context/UsuarioContext';


function HomeProprietario({ handleNavigation }) {

    const { tipoUsuario } = useContext(UsuarioContext);


    return (
        <>
            <div>
                <LogoDiv text='Home' />
                <div className='home-body'>
                    <h2>Tipo de Usuário: {tipoUsuario}</h2>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/cadastro')}>
                            <FaWpforms size={42} />
                            <h4>Cadastrar Vagas</h4>
                        </button>
                        <button className="item-menu-home" onClick={() => handleNavigation('/vagas/reservar')}>
                            <IoCalendarOutline size={42} />
                            <h4>Reservar Vagas</h4>
                        </button>
                    </div>
                    <div className="container-home">
                        <button className="item-menu-home" onClick={() => handleNavigation('/dados-bancarios')}>
                            <FaIdCard size={42} />
                            <h4>Dados Bancarios</h4>
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

export default HomeProprietario;