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
      <h1>Wish something existed yet saw nobody working on it ?  </h1>
      <h2>Wish there was a business idea vault created by the market itself?</h2>
      <p>Build this next is the reddit of new business ideas, it's a place where market needs can be co-created and teams can build the projects with enough interest</p>
      <p>BENEFITS</p>
      <h1>Connecting Ideas With Development Teams</h1>
      <p>Everyone can come here to share business ideas</p>
      <p>Build this next is where you can throw random business ideas and follow up with the builders</p>
      <p>Build this next is your startup idea vault</p>
      <h4> Just add your business ideas here when you have one and receive feedback from other founders</h4>
      <h1>Startup ideas and teams to build them, It's like x-prize but for small cool apps.</h1>
    </div>
  );
}

export default Header;
