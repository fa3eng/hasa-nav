import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import MoreSite from './components/MoreSite/MoreSite';

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 280px;
  /* border: 1px solid red; */
`;

const App:React.FC = () => {
  return (
    <Layout>
      <Search/>
      <MoreSite/>
    </Layout>
  )
};

export default App;