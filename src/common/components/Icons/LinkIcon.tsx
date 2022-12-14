import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const LinkIcon = (props: IconProps) => {
  return (
    <Icon
      fill="transparent"
      h="10"
      viewBox="0 0 40 40"
      w="10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.1094 11.1554L22.2031 8.06163C23.513 6.86776 25.2325 6.2245 27.0043 6.26552C28.7761 6.30654 30.464 7.02869 31.7172 8.28189C32.9704 9.5351 33.6926 11.223 33.7336 12.9948C33.7746 14.7666 33.1314 16.4861 31.9375 17.796L27.5156 22.2023C26.8783 22.8419 26.121 23.3495 25.2871 23.6958C24.4533 24.0421 23.5592 24.2204 22.6563 24.2204C21.7533 24.2204 20.8592 24.0421 20.0254 23.6958C19.1915 23.3495 18.4342 22.8419 17.7969 22.2023"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M20.8907 28.8443L17.797 31.9381C16.4871 33.1319 14.7676 33.7752 12.9958 33.7342C11.224 33.6932 9.53607 32.971 8.28287 31.7178C7.02966 30.4646 6.30752 28.7767 6.2665 27.0049C6.22548 25.2331 6.86874 23.5136 8.06261 22.2037L12.4845 17.7974C13.1218 17.1578 13.8791 16.6502 14.713 16.3039C15.5468 15.9576 16.4409 15.7793 17.3439 15.7793C18.2468 15.7793 19.1409 15.9576 19.9748 16.3039C20.8086 16.6502 21.5659 17.1578 22.2032 17.7974"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Icon>
  );
};
