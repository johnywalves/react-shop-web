import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 6.875rem;
    height: 2.0625rem;
  `,
  large: () => css`
    width: 12.5rem;
    height: 3.6875rem;
  `,
  hideOnMobile: () => css`
    @media (max-width: 768px) {
      width: 3.625rem;
      height: 2.8125rem;

      svg {
        height: 2.8125rem;
      }

      .text {
        display: none;
      }
    }
  `
}

export const WrapperLogo = styled.div<LogoProps>`
  ${({ theme, $color, $size, $hideOnMobile }) => css`
    color: ${theme.colors[$color!]};

    ${!!$size && wrapperModifiers[$size]}
    ${!!$hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
