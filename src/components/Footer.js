// import { useNavigate } from 'react-router-dom';
import './components.css';
import { useState } from 'react';
import MessagePopUp from './MessagePopUp';


export const Footer = (params) => {

    // const navigate = useNavigate();
    const [showPopup, setShowPopUp] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState('');

    const handleVoltar = () => {
        // Verifica se a página atual é a raiz
        const paginaAtual = window.location.pathname;
        if (paginaAtual === '/') {
            // Se estiver na raiz, redireciona para a página de login
            setShowPopUp(true);
            setMessagePopUp('Você deseja sair?'); // Mensagem de erro do login

        }
        // Caso contrário, continua com o comportamento padrão
        params.navigate('/')
    }

    return (
        <>
            {showPopup && (
                <MessagePopUp
                    title="Atenção"
                    body={messagePopUp}
                    onCancel={() => setShowPopUp(false)}
                    onConfirm={() => {
                        params.navigate('/login')
                        setShowPopUp(false)
                    }}
                    onlyWarning={false}
                />
            )}
            <div className="div-footer">

                <div>
                    <img src="/img/vector_hamburguer.png" alt="" />
                </div>
                <div>
                    <img src="/img/vector_home.png" alt="" />
                </div>
                <div onClick={handleVoltar}>
                    <img src="/img/vector_voltar.png" alt="" />
                </div>
            </div>
        </>
    )
}