import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 280px;
  /* border: 1px solid red; */
`;

const App:React.FC = () => {
  return (
    <Layout>
      <Search/>
    </Layout>
  )
};

export default App;