import React, { useState } from 'react';
import '../pages.css';
 import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, SalvarButton, Select } from '../../components/StyledComponents';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');

    return (
        <Container style={{ minHeight: '800px' }}>
            <form action="">
                <LogoDiv text="Cadastro de Usuário" />
                <label style={stylePersonal.label}>Nome</label>
                <Input
                    placeholder="Nome do usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label style={stylePersonal.label}>Email</label>
                <Input
                    type="email"
                    placeholder="Email do usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label style={stylePersonal.label}>Senha</label>
                <Input
                    type="password"
                    placeholder="Senha do usuário"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <label style={stylePersonal.label}>Tipo de Usuário</label>
                <Select
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}
                >
                    <option value="">Selecione o tipo de usuário</option>
                    <option value="cliente">Cliente</option>
                    <option value="proprietario">Proprietário</option>
                    <option value="administrador">Administrador</option>
                </Select>
                <ButtonContainer>
                    <CancelButton>Cancelar</CancelButton>
                    <SalvarButton className='btn-salvar'>Salvar</SalvarButton>
                </ButtonContainer>
            </form>
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default CadastroUsuario;
