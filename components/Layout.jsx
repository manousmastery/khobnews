import React from 'react';
import { Header, Navbar } from './';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
