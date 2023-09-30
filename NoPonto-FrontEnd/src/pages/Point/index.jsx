import React from 'react';

function Point() {
  const pageStyle = {
    backgroundColor: 'red',
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={pageStyle}>
      <h1>Bem-vindo à Páginado ponto</h1>
    </div>
  );
}

export default Point;
