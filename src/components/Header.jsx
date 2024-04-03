import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '2rem'
  };

  return (
    <div style={headerStyle}>
      <h1>buildthisnext</h1>
    </div>
  );
}

export default Header;
