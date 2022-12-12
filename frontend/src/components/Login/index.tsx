import React, { useState } from 'react';
import { Container, ButtonArea, Form, InputContainer, InputGroup } from './styles';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { login } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setemail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const history = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login(email, password)
      .then((res) => {
        sessionStorage.setItem('token', JSON.stringify(res.data.token));
        history('/friendlist');
      });
  };

  return (
    <>
      <Container>
        <header>Login</header>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <InputGroup>
              <input
                id="email"
                value={email}
                type="text"
                autoComplete="off"
                spellCheck="false"
                placeholder={'Email'}
                onChange={handleChangeEmail}
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
                  <FaRegEye onClick={togglePassword}></FaRegEye> :
                  <FaRegEyeSlash onClick={togglePassword}></FaRegEyeSlash>
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
