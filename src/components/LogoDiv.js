import './components.css';
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
/**
 * 
 * @param {@param} params .text
 * @returns 
 */
export const LogoDiv = (params) => {

    const { user } = useContext(UsuarioContext);

    return (
        <>
            <div className='container-logo'>
                <div className='image-box'>
                    <img src="/logo_estacione_facil_transparente.png" alt="teste" style={{ width: '100%' }} />
                </div>
                <h1>{`${params.text}`}</h1>
            </div>
            {user && user.nome && (
                <div className='container-user-info'>
                    <h2 style={{ marginTop: '0', marginBottom: '2rem', paddingTop: '0' }}>Bem-vindo, {user.nome}!</h2>
                    <p>Tipo de Usuário: {user.tipo}</p>
                </div>
            )}
        </>
    )
}