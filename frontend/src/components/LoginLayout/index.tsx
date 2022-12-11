import React from 'react';
import { Container } from './styles';
import Login from '../Login';
import Header from '../Header';

const LoginLayout: React.FC = () => (
  <Container>
    <Header />
    <Login />
  </Container>
);

export default LoginLayout;