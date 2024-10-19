import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';

const CadastroCartao = () => {
    const [nome, setNome] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [codigoVerificacao, setCodigoVerificacao] = useState('');
    const [validade, setValidade] = useState('');
    const [salvarCartao, setSalvarCartao] = useState(false);

    return (
        <Container style={{ minHeight: '800px' }}>
            <form action="">
                <LogoDiv text="Cadastro de Cartão" />
                <label style={stylePersonal.label}>Nome no Cartão</label>
                <Input
                    placeholder="Nome como aparece no cartão"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label style={stylePersonal.label}>Número do Cartão</label>
                <Input
                    placeholder="Número do cartão"
                    value={numeroCartao}
                    onChange={(e) => setNumeroCartao(e.target.value)}
                />
                <label style={stylePersonal.label}>Código de Verificação</label>
                <Input
                    placeholder="CVV"
                    value={codigoVerificacao}
                    onChange={(e) => setCodigoVerificacao(e.target.value)}
                />
                <label style={stylePersonal.label}>Validade</label>
                <Input
                    placeholder="MM/AA"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                />
                <CheckboxContainer>
                    <Checkbox
                        type="checkbox"
                        checked={salvarCartao}
                        onChange={(e) => setSalvarCartao(e.target.checked)}
                    />
                    <CheckboxLabel>Salvar cartão para futuros pagamentos</CheckboxLabel>
                </CheckboxContainer>
                <ButtonContainer>
                    <CancelButton>Cancelar</CancelButton>
                    <CadastrarButton className='btn-cadastrar'>Adicionar Cartão</CadastrarButton>
                </ButtonContainer>
            </form>
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  color: white;
`;

export default CadastroCartao;

