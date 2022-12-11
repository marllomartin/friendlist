import React, { useState } from 'react';
import { Container, ButtonArea, Form, InputContainer, InputGroup } from './styles';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Container>
        <header>Login</header>
        <Form>
          <InputContainer>
            <InputGroup>
              <input
                id="username"
                value={username}
                type="text"
                autoComplete="off"
                placeholder={'Nome de usuário'}
                onChange={handleChangeUserName}
              />
            </InputGroup>
            <InputGroup>
              <input
                id="password"
                value={password}
                type={passwordShown ? 'text' : 'password'}
                placeholder={'Senha'}
                onChange={handleChangePassword}
              />
              {
                !passwordShown ?
                  <FaRegEye color='#a7a7a7' onClick={togglePassword}></FaRegEye> :
                  <FaRegEyeSlash color='#a7a7a7' onClick={togglePassword}></FaRegEyeSlash>
              }
            </InputGroup>

          </InputContainer>
          <ButtonArea>
            <button
              type="submit"
            >
              Entrar
            </button>
          </ButtonArea>
        </Form>
      </Container>
    </>
  );
};

export default Login;
