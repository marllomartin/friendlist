import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: relative;
  border-radius: 6px;
  margin: 15px 10px 10px;
  padding: 25px;
  height: 120px;
  width: 260px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
`;

export const CardWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 0px 215px 50px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  text-align: center;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 15px;
`;

export const CardTextDate = styled.span`
  color: grey ;
  font-size: 20px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 30px;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    #4ee762 15.22%,
    #85e1bc 32.09%,
    #4ee762 48.96%,
    #4ee762 67.94%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #5a5a5a;
  font-size: 15px;
  font-weight: 300;
  margin: 10px;

  svg {
    margin-right: 5px;
  }
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #3ab34a;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;
