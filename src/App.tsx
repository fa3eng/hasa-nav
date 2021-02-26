import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import MoreSite from './components/MoreSite/MoreSite';
import Logo from './components/Logo/Logo'
import Footer from './components/Footer'

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 95vh;
`;

const App:React.FC = () => {
  return (
    <>
      <Layout>
        <Logo/>
        <Search/>
        <MoreSite/>
      </Layout>
      <Footer/>
    </>
  )
};

export default App;