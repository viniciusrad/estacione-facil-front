import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

// Componente de seleção estilizado
const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #1D4189;
    color: white;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #4CAF50;
    }
`;

const CadastroUsuario = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('cliente');
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState({ title: '', body: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (senha !== confirmarSenha) {
            setPopUpMessage({
                title: 'Erro',
                body: 'As senhas não coincidem!'
            });
            setShowPopUp(true);
            return;
        }

        try {
            const userData = {
                nome,
                email,
                cpf,
                telefone,
                senha,
                tipo: tipoUsuario,
                vehicles: []
            };

            const response = await fetch('http://localhost:3000/users', {
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
                    body: 'Cadastro realizado com sucesso!'
                });
                // Limpar formulário
                setNome('');
                setEmail('');
                setCpf('');
                setTelefone('');
                setSenha('');
                setConfirmarSenha('');
                setTipoUsuario('cliente');
            } else {
                const error = await response.json();
                setPopUpMessage({
                    title: 'Erro',
                    body: `Erro ao realizar cadastro: ${error.message}`
                });
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setPopUpMessage({
                title: 'Erro',
                body: 'Erro ao realizar cadastro. Por favor, tente novamente.'
            });
        }
        setShowPopUp(true);
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <form onSubmit={handleSubmit}>
                <LogoDiv text="Cadastro de Usuário" />

                <label style={stylePersonal.label}>Tipo de Usuário</label>
                <Select
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}
                >
                    <option value="cliente">Cliente</option>
                    <option value="proprietario">Proprietário</option>
                </Select>

                <label style={stylePersonal.label}>Nome</label>
                <Input
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label style={stylePersonal.label}>Email</label>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label style={stylePersonal.label}>CPF</label>
                <Input
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />

                <label style={stylePersonal.label}>Telefone</label>
                <Input
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                />

                <label style={stylePersonal.label}>Senha</label>
                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <label style={stylePersonal.label}>Confirmar Senha</label>
                <Input
                    type="password"
                    placeholder="Confirme sua senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                />

                <ButtonContainer>
                    <CancelButton type="button" onClick={() => window.history.back()}>
                        Cancelar
                    </CancelButton>
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
                    onConfirm={() => {
                        navigate('/login');
                        setShowPopUp(false)
                    }}
                />
            )}
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default CadastroUsuario;
