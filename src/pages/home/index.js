import './index.css';
import { LogoDiv } from '../../components/LogoDiv';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import HomeAdm from './HomeAdm';
import { UsuarioContext } from '../../context/UsuarioContext';


export const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const { tipoUsuario } = useContext(UsuarioContext);

    return (
        <>
            {tipoUsuario == 'administrador' ? <HomeAdm handleNavigation={handleNavigation} /> : <h1>test</h1>}
        </>

    )
}