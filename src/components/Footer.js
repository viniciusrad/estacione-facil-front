// import { useNavigate } from 'react-router-dom';
import './components.css';


export const Footer = (params) => {

    // const navigate = useNavigate();


    const handleVoltar = () => {
        params.navigate('/')
    }

    return (
        <div className="div-footer">
            {/* <div>
                <img src="/img/menu_sanduiche.png" alt="" />
                </div> */}
            {/* <div>vagas</div>
            <div>voltar</div> */}
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
    )
}