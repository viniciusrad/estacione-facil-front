import './index.css';
import { LogoDiv } from '../../components/LogoDiv';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import HomeCliente from './HomeCliente';
import HomeAdmin from './HomeAdmin';
import HomeProprietario from './HomeProprietario';
import { UsuarioContext } from '../../context/UsuarioContext';


export const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const { tipoUsuario } = useContext(UsuarioContext);
    console.log(tipoUsuario);

    return (
        <>
            {tipoUsuario == 'cliente' && <HomeCliente handleNavigation={handleNavigation} />}
            {tipoUsuario == 'administrador' && <HomeAdmin handleNavigation={handleNavigation}/>}
            {tipoUsuario == 'proprietario' && <HomeProprietario handleNavigation={handleNavigation}/>}
        </>

    )
}