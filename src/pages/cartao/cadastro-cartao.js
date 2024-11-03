import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';
import PopUp from '../../components/MessagePopUp';

const CadastroCartao = () => {
    const [nome, setNome] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [codigoVerificacao, setCodigoVerificacao] = useState('');
    const [validade, setValidade] = useState('');
    const [salvarCartao, setSalvarCartao] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');
    const [popUpError, setPopUpError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cartaoData = {
            nomeNoCartao: nome,
            numeroCartao: numeroCartao,
            codigoVerificacao: codigoVerificacao,
            validade: validade,
            salvarParaFuturos: salvarCartao,
            userId: "user-test-id",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        try {
            const response = await fetch('http://localhost:3000/cartoes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartaoData),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar cartão');
            }

            setPopUpMessage('Cartão cadastrado com sucesso!');
            setPopUpError(false);
        } catch (error) {
            setPopUpMessage(error.message);
            setPopUpError(true);
        } finally {
            setShowPopUp(true);
        }
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <form onSubmit={handleSubmit}>
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

            {showPopUp && (
                <PopUp
                    title={popUpError ? "Erro" : "Sucesso"}
                    body={popUpMessage}
                    onCancel={() => setShowPopUp(false)}
                    onlyWarning={true}
                />
            )}
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

