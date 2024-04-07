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
      <p>Ever found yourself thinking X business should exist but you didn't do anything about it? </p>
      <p>Build this next is the reddit of new business ideas</p>
      <p>BENEFITS</p>
      <p>FOUNDERS AND DEVELOPERS can come here for ideas</p>
      <p>Everyone can come here to share business ideas</p>
      <p>Build this next is where you can throw random business ideas and follow up with the builders</p>
      <p>Build this next is your startup idea vault</p>
      <h4> Just add your business ideas here when you have one and receive feedback from other founders</h4>
    </div>
  );
}

export default Header;
