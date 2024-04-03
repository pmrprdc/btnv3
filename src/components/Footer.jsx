import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'BLACK',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    paddingBottom: '100px'
  };

  return (
    <div style={footerStyle}>
      <p>contact</p>
    </div>
  );
}

export default Footer;
