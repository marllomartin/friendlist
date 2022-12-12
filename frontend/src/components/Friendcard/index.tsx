import React from 'react';
import { Container } from './styles';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Friendcard: React.FC<any> = ({ name, email, phone }) => {
  return (
    <>
      <Container>
        <h4>{name}</h4>
        <p>
          <HiOutlineMail />
          {email}
        </p>
        <p>
          <HiOutlinePhone />
          {phone}
        </p>
        <p>
          <HiOutlineLocationMarker />
          location
        </p>
      </Container>
    </>
  );
};

export default Friendcard;
