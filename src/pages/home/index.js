import './index.css';
import { LogoDiv } from '../../components/LogoDiv';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import HomeCliente from './HomeCliente';
import { UsuarioContext } from '../../context/UsuarioContext';


export const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const { tipoUsuario } = useContext(UsuarioContext);

    return (
        <>
            {tipoUsuario == 'cliente' && <HomeCliente handleNavigation={handleNavigation} />}
            {tipoUsuario == 'administrador' && <h1>Criarndo a home do adm</h1>}
            {tipoUsuario == 'proprietario' && <h1>Criarndo a home do proprietario</h1>}
        </>

    )
}