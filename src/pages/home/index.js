import './index.css';
import { LogoDiv } from '../../components/LogoDiv';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import HomeCliente from './HomeCliente';
import HomeAdmin from './HomeAdmin';
import HomeProprietario from './HomeProprietario';
import { UsuarioContext } from '../../context/UsuarioContext';

export const Home = () => {
    const navigate = useNavigate();
    const { tipoUsuario } = useContext(UsuarioContext);

    useEffect(() => {
        if (!tipoUsuario.tipo) {
            navigate('/login');
        }
    }, [tipoUsuario, navigate]);

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            {tipoUsuario.tipo == 'cliente' && <HomeCliente handleNavigation={handleNavigation} />}
            {tipoUsuario.tipo == 'administrador' && <HomeAdmin handleNavigation={handleNavigation}/>}
            {tipoUsuario.tipo == 'proprietario' && <HomeProprietario handleNavigation={handleNavigation}/>}
        </>
    );
}