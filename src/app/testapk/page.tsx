export default function TestAPKPage() {
  // On crée un chiffre unique basé sur l'heure de génération de la page
  const cacheBuster = Date.now(); 

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>🔧 Diagnostic de l'APK</h1>
      <p>Version actuelle des stats : <strong>286</strong></p>
      
      <div style={{ margin: '30px 0' }}>
        <a 
          href={`/faistasortieatoulouse.apk?v=${cacheBuster}`} 
          download 
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
          }}
        >
          📥 Télécharger l'APK (Force Refresh)
        </a>
      </div>

      <p style={{ color: '#666', fontSize: '14px' }}>
        Si le logo n'est pas le bon après installation, <br />
        pensez à désinstaller l'ancienne version de votre téléphone d'abord.
      </p>
    </div>
  );
}