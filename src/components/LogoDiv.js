export const LogoDiv = (params) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '120px', maxHeight: '60px', marginRight: '1rem' }}>
                <img src="/logo_estacione_facil_transparente.png" alt="teste" style={{ width: '100%' }} />
            </div>
            <h1>{`${params.text}`}</h1>
        </div>
    )
}