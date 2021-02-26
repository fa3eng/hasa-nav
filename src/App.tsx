import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import MoreSite from './components/MoreSite/MoreSite';
import Logo from './components/Logo/Logo'

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  /* padding-top: 280px; */
`;

const App:React.FC = () => {
  return (
    <Layout>
      <Logo/>
      <Search/>
      <MoreSite/>
    </Layout>
  )
};

export default App;