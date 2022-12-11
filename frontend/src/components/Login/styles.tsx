import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  margin: 15px 10px 20px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);

  header {
    width: 100%;
    position: relative;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 600;
    color: #3d495c;
  }

  header::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    background-color: #85e1bc;
  }

  input {
    margin-top: 30px;
    border: none;
    background-color: #ededed;
    height: 40px;
    width: 300px;
    padding-left: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 5px;
  background-color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
  justify-content: space-around;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
  position: relative;

  input {
    border: 1px solid #a7a7a7;
    background-color: white;
    height: 40px;
    width: 100%;
    min-width: 80px;
    padding-left: 10px;
    margin: 5px;
  }

  span {
    width: 100%;
    margin-right: -20em;
    margin-left: 5px;
    font-size: 15px;
  }

  svg {
    right: 0;
    cursor: pointer;
    margin-top: 5px;
    width: 40px;
    height: 40px;
    position: absolute;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    align-self: center;
    border: none;
    border-radius: 5px;
    width: 60%;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.5s;
    background-image: linear-gradient(to right, #4ee762 0%, #85e1bc  51%, #4ee762  100%);
    background-size: 200% auto;
    color: white;
    margin: 4px 10px 4px 10px;
  }

  button:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;
