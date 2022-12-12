import React from 'react';
import { Container } from './styles';
import Friendlist from '../Friendlist';
import Header from '../Header';

const LoginLayout: React.FC = () => (
  <Container>
    <Header />
    <Friendlist />
  </Container>
);

export default LoginLayout;