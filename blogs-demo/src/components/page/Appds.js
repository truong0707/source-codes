import Menu from './Menu';
import Banner from './Banner';
import Slogan from './Slogan';
import Register from './Register';
import React from 'react';
import Status from './Status';
function Appds() {
  console.log("AAaa")
  return (
    <div className="newpage">
      <Menu />
      <Banner />
      <Slogan />
      <Status />
      <Register />
      
    </div>
  );
}

export default Appds;