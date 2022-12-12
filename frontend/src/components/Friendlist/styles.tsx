import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  margin: 15px 10px 20px;
  padding: 25px 0px;
  background-color: #ededed;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.3);

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
`;

export const SearchContainer = styled.div`
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
`;

export const InputGroup = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  position: relative;

  input {
    border: 1px solid #a7a7a7;
    background-color: white;
    text-align: center;
    height: 35px;
    width: 100%;
    min-width: 80px;
    margin: 5px;
  }

  svg {
    left: 10px;
    color: #a7a7a7;
    margin-top: 10px;
    width: 25px;
    height: 25px;
    position: absolute;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 60px 60px;

  .span {
  }
`;
export const NotFound = styled.div`
  p {
    font-size: 20px;
    margin: 50px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: center;

  button{
    border: 2px solid black;
    border-radius: 15px;
    width: 100%;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    background-color: white;
    color: black;
    text-transform: uppercase;
    box-shadow: 5px 5px black;
    margin: 4px 10px 4px 10px;
  }

  button:active {
    box-shadow: 0 0 0 white;
    margin: 6px 10px 2px 10px;
  }

  .active {
    box-shadow: 0 0 0 white;
    margin: 6px 10px 2px 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  max-width: 700px;

  flex-wrap: wrap;
`;
