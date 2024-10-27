import React, { useState } from 'react';
import { LogoDiv } from '../../components/LogoDiv';
import MessagePopUp from '../../components/MessagePopUp';
import styled from 'styled-components';

import {
    ConfirmButton as BaseConfirmButton
} from '../../components/StyledComponents';

// Estiliza o botão de confirmação para ficar desabilitado quando não houver seleção
const StyledConfirmButton = styled(BaseConfirmButton)`
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

function DadosBancarios() {
    const [dadosBancarios, setDadosBancarios] = useState({
        banco: '',
        agencia: '',
        conta: ''
    });

    const [message, setMessage] = useState({
        show: false,
        message: '',
        isError: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosBancarios(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você implementará a lógica para salvar os dados bancários
        setMessage({
            show: true,
            message: 'Dados bancários salvos com sucesso!',
            isError: false
        });
    };

    const stylePersonal = {
        label: {
            textAlign: 'left',
            marginLeft: '2rem'
        }
    };

    return (
        <div>
            <LogoDiv text='Dados Bancários' />
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label style={stylePersonal.label}>Banco:</label>
                    <div className='form-group'>
                        <input
                            type="text"
                            name="banco"
                            value={dadosBancarios.banco}
                            onChange={handleChange}
                            required
                            placeholder="Nome do banco"
                        />
                    </div>

                    <label style={stylePersonal.label}>Agência:</label>
                    <div className='form-group'>
                        <input
                            type="text"
                            name="agencia"
                            value={dadosBancarios.agencia}
                            onChange={handleChange}
                            required
                            placeholder="Número da agência"
                        />
                    </div>

                    <label style={stylePersonal.label}>Conta Corrente:</label>
                    <div className='form-group'>
                        <input
                            type="text"
                            name="conta"
                            value={dadosBancarios.conta}
                            onChange={handleChange}
                            required
                            placeholder="Número da conta"
                        />
                    </div>
                    <StyledConfirmButton
                        type="submit"
                        className='btn-confirmar'
                        onClick={() => {
                            setMessage('dados de cartão de credito armazenados com sucesso')
                        }}
                    >
                        Selecionar
                    </StyledConfirmButton>
                </form>
            </div>

            {message.show && (
                <MessagePopUp
                    message={message.message}
                    isError={message.isError}
                    onConfirm={() => setMessage({ ...message, show: false })}
                    onClose={() => setMessage({ ...message, show: false })}
                    onCancel={() => setMessage({ ...message, show: false })}
                />
            )}
        </div>
    );
}

export default DadosBancarios;
