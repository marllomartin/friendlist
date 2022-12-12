import React from 'react';
import { CardWrapper, CardTextWrapper, CardTextDate, CardTextTitle, CardTextBody, CardStatWrapper, CardButton } from './styles';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Friendcard: React.FC<any> = ({ name, username, email, phone, city, website }) => {
  console.log(website);

  return (
    <>
      <CardWrapper>
        <CardTextWrapper>
          <CardTextTitle>
            {name}
          </CardTextTitle>
          <CardTextDate>
            ({username})
          </CardTextDate>
          <CardTextBody>
            <HiOutlineMail />
            {email}
          </CardTextBody>
          <CardTextBody>
            <HiOutlinePhone />
            {phone}
          </CardTextBody>
          <CardTextBody>
            <HiOutlineLocationMarker />
            {city}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardButton href={website}>
            Website
          </CardButton>
        </CardStatWrapper>
      </CardWrapper>
    </>
  );
};

export default Friendcard;
