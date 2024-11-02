import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import PopUp from '../../components/MessagePopUp';
import { 
    Container, 
    Input, 
    ButtonContainer, 
    CancelButton, 
    CadastrarButton 
} from '../../components/StyledComponents';

const CadastroUsuarioAdmin = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState({ title: '', body: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const userData = {
                nome,
                email,
                cpf,
                telefone,
                tipo: 'admin'
            };

            const response = await fetch('http://localhost:3000/admin/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                setPopUpMessage({
                    title: 'Sucesso',
                    body: 'Usuário administrador cadastrado com sucesso!'
                });
                // Limpar formulário
                setNome('');
                setEmail('');
                setCpf('');
                setTelefone('');
            } else {
                const error = await response.json();
                setPopUpMessage({
                    title: 'Erro',
                    body: `Erro ao cadastrar usuário: ${error.message}`
                });
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setPopUpMessage({
                title: 'Erro',
                body: 'Erro ao cadastrar usuário. Por favor, tente novamente.'
            });
        }
        setShowPopUp(true);
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <form onSubmit={handleSubmit}>
                <LogoDiv text="Cadastro de Administrador" />

                <label style={stylePersonal.label}>Nome</label>
                <Input
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label style={stylePersonal.label}>Email</label>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label style={stylePersonal.label}>CPF</label>
                <Input
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <label style={stylePersonal.label}>Telefone</label>
                <Input
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <ButtonContainer>
                    <CancelButton type="button">Cancelar</CancelButton>
                    <CadastrarButton type="submit" className='btn-cadastrar'>
                        Cadastrar
                    </CadastrarButton>
                </ButtonContainer>
            </form>

            {showPopUp && (
                <PopUp
                    title={popUpMessage.title}
                    body={popUpMessage.body}
                    onCancel={() => setShowPopUp(false)}
                    onConfirm={() => setShowPopUp(false)}
                />
            )}
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default CadastroUsuarioAdmin;
