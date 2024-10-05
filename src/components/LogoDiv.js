
import './components.css';
/**
 * 
 * @param {@param} params .text
 * @returns 
 */
export const LogoDiv = (params) => {
    return (
        <div className='container-logo'>
            <div className='image-box'>
                <img src="/logo_estacione_facil_transparente.png" alt="teste" style={{ width: '100%' }} />
            </div>
            <h1>{`${params.text}`}</h1>
        </div>
    )
}