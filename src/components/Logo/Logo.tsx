import React from 'react';
import styled from 'styled-components';
// import logo_harry from './logo_harry.png';
import logo_main from './logo_main.png';


const Background = styled.div`
  width: 300px;
  height: 200px;
  margin-top: 100px;
  background: no-repeat url(${logo_main}) center/90%;
`;

const Logo:React.FC = () => {
  return (
    <Background>
    </Background>
  );
}

export default Logo;
