import './App.css'

function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      boxSizing: 'border-box',
      background: '#f4f7f5',
      color: '#183b2b',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <section style={{ maxWidth: '600px' }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 18px',
          borderRadius: '30px',
          background: '#183b2b',
          color: '#ffffff',
          fontWeight: 'bold',
          letterSpacing: '2px',
          fontSize: '14px'
        }}>
          RCH COASTAL
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 60px)',
          margin: '28px 0 16px'
        }}>
          We'll Be Back Soon!
        </h1>

        <p style={{
          fontSize: '18px',
          lineHeight: 1.8,
          color: '#52645a'
        }}>
          RCH Coastal Construction &amp; Engineering is temporarily
          undergoing maintenance as we make improvements to serve you
          better.
        </p>

        <p style={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: '#52645a'
        }}>
          Thank you for your patience. Please check back soon.
        </p>

        <div style={{
          width: '60px',
          height: '4px',
          background: '#24965a',
          margin: '28px auto',
          borderRadius: '5px'
        }} />

        <p style={{ fontSize: '13px', color: '#718078' }}>
          © {new Date().getFullYear()} RCH Coastal Construction &amp; Engineering
        </p>
      </section>
    </main>
  )
}

export default App