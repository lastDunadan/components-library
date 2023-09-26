import { css } from 'styled-components';

export const hiddenOnDesktop = css`
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const hiddenOnMobile = css`
  display: none;

  @media ${({ theme }) => theme.media.desktop} {
    display: unset;
  }
`;
