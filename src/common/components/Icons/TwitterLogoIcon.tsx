import React from 'react';
import { ChakraProps, Icon } from '@chakra-ui/react';

interface ILogo extends ChakraProps {
  fill?: string;
  h?: string;
  w?: string;
}

export const TwitterLogoIcon: React.FC<ILogo> = ({
  fill = 'white',
  h = '10',
  w = '10',
  ...props
}) => {
  return (
    <Icon
      w={`${w}px`}
      h={`${h}px`}
      viewBox={`0 0 ${h} ${w}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.7125 4.71262L23.9375 8.47512C23.1875 17.2126 15.8125 24.0001 7 24.0001C5.1875 24.0001 3.6875 23.7126 2.55 23.1501C1.6375 22.6876 1.2625 22.2001 1.1625 22.0501C1.07976 21.9244 1.02645 21.7817 1.00653 21.6326C0.986608 21.4835 1.0006 21.3318 1.04746 21.1888C1.09431 21.0458 1.17283 20.9152 1.27716 20.8068C1.38148 20.6984 1.50893 20.6149 1.65 20.5626C1.675 20.5501 4.625 19.4251 6.5375 17.2626C5.35142 16.4181 4.30894 15.3883 3.45 14.2126C1.7375 11.8876 -0.0750028 7.85012 1.0125 1.82512C1.04668 1.646 1.12861 1.47944 1.24962 1.34303C1.37063 1.20662 1.52623 1.10542 1.7 1.05012C1.87431 0.993039 2.06097 0.985004 2.23955 1.02689C2.41813 1.06878 2.58174 1.15898 2.7125 1.28762C2.75 1.33762 6.9125 5.43762 12 6.76262V6.00012C12.0049 5.20726 12.1659 4.42313 12.4739 3.6925C12.7819 2.96188 13.2307 2.29906 13.7948 1.74191C14.3589 1.18475 15.0273 0.74417 15.7617 0.445312C16.4961 0.146455 17.2821 -0.0048227 18.075 0.000117191C19.1156 0.0149587 20.1346 0.299095 21.0328 0.824842C21.9309 1.35059 22.6776 2.10002 23.2 3.00012H27C27.1974 2.9995 27.3906 3.05733 27.5552 3.16633C27.7198 3.27533 27.8485 3.43062 27.925 3.61262C27.997 3.79733 28.0153 3.99866 27.9777 4.19333C27.9401 4.38799 27.8482 4.56803 27.7125 4.71262V4.71262Z"
        fill={fill}
      />
    </Icon>
  );
};