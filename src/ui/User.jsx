export function User({ name, role, stID, pic }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '100px',
            width: '100vw'
        }}>
        <div style={{
            border: '2px solid #ccc',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '400px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            backgroundColor: '#f8f8f8',
            textAlign: 'center'
        }}>
            <img src={pic} alt={name} style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px',
                border: '4px solid #fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }} />
            <h1 style={{ margin: '0 0 12px', fontSize: '2em', color: '#333', fontWeight: 'bold' }}>{name}</h1>
            <h2 style={{ margin: '0 0 12px', fontSize: '1.5em', color: '#555' }}>Role: {role}</h2>
            <h3 style={{ margin: '0', fontSize: '1.2em', color: '#777' }}>Student ID: {stID}</h3>
        </div>
        </div>
    )
}