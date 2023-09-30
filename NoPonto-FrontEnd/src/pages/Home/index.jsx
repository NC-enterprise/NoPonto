import React from 'react';

function Home() {
  const pageStyle = {
    backgroundColor: 'blue',
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={pageStyle}>
      <h1>Bem-vindo à Página Inicial</h1>
    </div>
  );
}

export default Home;
