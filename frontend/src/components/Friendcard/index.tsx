import React from 'react';
import { CardWrapper, CardTextWrapper, CardTextDate, CardTextTitle, CardTextBody, CardStatWrapper, CardButton } from './styles';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

interface IFriend {
  name: string,
  username: string,
  email: string,
  phone: string,
  city: string,
  website: string
}

const Friendcard: React.FC<IFriend> = ({ name, username, email, phone, city, website }) => {
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
          <CardButton href={`https://${website}`}>
            Website
          </CardButton>
        </CardStatWrapper>
      </CardWrapper>
    </>
  );
};

export default Friendcard;
