import React from 'react';
import { Container } from './styles';
import SvgLogo from '../../styles/svg/logo';

const Header: React.FC = () => {


  return (
    <Container>
      <SvgLogo width={'20em'} />
    </Container>
  );
};

export default Header;