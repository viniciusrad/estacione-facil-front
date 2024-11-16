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
    const { user } = useContext(UsuarioContext);

    useEffect(() => {
        if (!user.tipo) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            {user.tipo == 'cliente' && <HomeCliente handleNavigation={handleNavigation} />}
            {user.tipo == 'administrador' && <HomeAdmin handleNavigation={handleNavigation}/>}
            {user.tipo == 'proprietario' && <HomeProprietario handleNavigation={handleNavigation}/>}
        </>
    );
}