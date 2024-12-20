import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import {
    Container,
    Input,
    ButtonContainer,
    CancelButton,
    Select,
    RadioContainer,
    RadioInput,
    RadioLabel,
    RadioGroup,
    FormGroup,
    CadastrarButton,
} from '../../components/StyledComponents';
import { VagasContext } from '../../context/VagasContext';
import PopUp from '../../components/MessagePopUp';
import { UsuarioContext } from '../../context/UsuarioContext';

const CadastroVaga = () => {
    const navigate = useNavigate();
    // const [proprietario, setProprietario] = useState('');
    const { user } = useContext(UsuarioContext);
    // const { adicionarVaga } = useContext(VagasContext);
    const [tipoVaga, setTipoVaga] = useState('ambas');
    const [tipoContratacao, setTipoContratacao] = useState('ambas');
    const [precoHora, setPrecoHora] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [diasDisponiveis, setDiasDisponiveis] = useState([]);
    const [precoDiaria, setPrecoDiaria] = useState('');
    const [endereco, setEndereco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [fotos, setFotos] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');
    const [popUpError, setPopUpError] = useState(false);

    const handleDiaChange = (dia) => {
        if (diasDisponiveis.includes(dia)) {
            setDiasDisponiveis(diasDisponiveis.filter(d => d !== dia));
        } else {
            setDiasDisponiveis([...diasDisponiveis, dia]);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        console.log('Cancelar Cadastro de Vaga');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novaVaga = {
            tipoVaga,
            tipoContratacao,
            endereco,
            descricao,
            proprietarioId: user.id,
            status: 'indisponivel',
            fotos: fotos.filter(url => url.trim() !== '').join(','),
            ...(tipoContratacao === 'hora' ? {
                precoHora,
                horaInicio,
                horaFim
            } : {
                precoDiaria,
                diasDisponiveis
            })
        };

        try {
            const response = await fetch('http://localhost:3000/vagas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaVaga),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar vaga');
            }

            setPopUpMessage('Vaga cadastrada com sucesso!');
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
            <LogoDiv text="Cadastro de Vaga" />
            <form onSubmit={handleSubmit}>
                <label style={stylePersonal.label}>Tipo de Vaga</label>
                <RadioContainer>
                    <RadioInput
                        type="radio"
                        id="ambas"
                        value="ambas"
                        checked={tipoVaga === 'ambas'}
                        onChange={(e) => setTipoVaga(e.target.value)}
                    />
                    <RadioLabel htmlFor="ambas">Ambas</RadioLabel>
                    <RadioInput
                        type="radio"
                        id="coberta"
                        value="coberta"
                        checked={tipoVaga === 'coberta'}
                        onChange={(e) => setTipoVaga(e.target.value)}
                    />
                    <RadioLabel htmlFor="coberta">Vaga Coberta</RadioLabel>
                    <RadioInput
                        type="radio"
                        id="descoberta"
                        value="descoberta"
                        checked={tipoVaga === 'descoberta'}
                        onChange={(e) => setTipoVaga(e.target.value)}
                    />
                    <RadioLabel htmlFor="descoberta">Vaga Descoberta</RadioLabel>
                </RadioContainer>

                <label style={stylePersonal.label}>Tipo de Contratação</label>
                <RadioContainer>
                    <RadioInput
                        type="radio"
                        id="ambas-contratacao"
                        value="ambas"
                        checked={tipoContratacao === 'ambas'}
                        onChange={(e) => setTipoContratacao(e.target.value)}
                    />
                    <RadioLabel htmlFor="ambas-contratacao">Ambas</RadioLabel>
                    <RadioInput
                        type="radio"
                        id="hora"
                        value="hora"
                        checked={tipoContratacao === 'hora'}
                        onChange={(e) => setTipoContratacao(e.target.value)}
                    />
                    <RadioLabel htmlFor="hora">Por Hora</RadioLabel>
                    <RadioInput
                        type="radio"
                        id="diaria"
                        value="diaria"
                        checked={tipoContratacao === 'diaria'}
                        onChange={(e) => setTipoContratacao(e.target.value)}
                    />
                    <RadioLabel htmlFor="diaria">Por Diária</RadioLabel>
                </RadioContainer>

                {(tipoContratacao === 'hora' || tipoContratacao === 'ambas') && (
                    <FormGroup>
                        <h3>Configuração por Hora</h3>
                        <Input
                            placeholder="Preço por hora"
                            value={precoHora}
                            onChange={(e) => setPrecoHora(e.target.value)}
                        />
                        <Input
                            type="time"
                            placeholder="Horário de início"
                            value={horaInicio}
                            onChange={(e) => setHoraInicio(e.target.value)}
                        />
                        <Input
                            type="time"
                            placeholder="Horário de fim"
                            value={horaFim}
                            onChange={(e) => setHoraFim(e.target.value)}
                        />
                    </FormGroup>
                )}

                {(tipoContratacao === 'diaria' || tipoContratacao === 'ambas') && (
                    <FormGroup>
                        <h3>Configuração por Diária</h3>
                        <Input
                            placeholder="Preço da diária"
                            value={precoDiaria}
                            onChange={(e) => setPrecoDiaria(e.target.value)}
                        />
                        <DiasContainer>
                            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia, index) => (
                                <DiaButton
                                    key={index}
                                    type="button"
                                    selected={diasDisponiveis.includes(dia)}
                                    onClick={() => handleDiaChange(dia)}
                                >
                                    {dia}
                                </DiaButton>
                            ))}
                        </DiasContainer>
                    </FormGroup>
                )}

                <FormGroup>
                    <h3>Informações da Vaga</h3>
                    <Input
                        placeholder="Endereço completo"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                    <TextArea
                        placeholder="Descrição da vaga"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                    {fotos.map((url, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <Input
                                type="text"
                                placeholder="URL da imagem"
                                value={url}
                                onChange={(e) => {
                                    const novasUrls = [...fotos];
                                    novasUrls[index] = e.target.value;
                                    setFotos(novasUrls);
                                }}
                            />
                            <button 
                                type="button"
                                onClick={() => {
                                    const novasUrls = fotos.filter((_, i) => i !== index);
                                    setFotos(novasUrls);
                                }}
                                style={{
                                    backgroundColor: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '0 15px',
                                    cursor: 'pointer'
                                }}
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button 
                        type="button"
                        onClick={() => setFotos([...fotos, ''])}
                        style={{
                            backgroundColor: '#2E18B9',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Adicionar Nova Imagem
                    </button>
                </FormGroup>

                <ButtonContainer>
                    <CancelButton type="button" onClick={() => navigate('/')}>Cancelar</CancelButton>
                    <CadastrarButton type="submit">Cadastrar</CadastrarButton>
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

const DiasContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`;

const DiaButton = styled.button`
    background-color: ${props => props.selected ? '#2E18B9' : '#1D4189'};
    color: white;
    border: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2E18B9;
    }
`;

const TextArea = styled.textarea`
    width: 90%;
    height: 100px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #2C2C2C;
    color: white;
    border: 1px solid #486579;
    resize: vertical;
`;

const FileInput = styled.input`
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    background-color: #2C2C2C;
    color: white;
    border-radius: 5px;
`;

const FotosPreview = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
`;

const PreviewImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

export default CadastroVaga;
