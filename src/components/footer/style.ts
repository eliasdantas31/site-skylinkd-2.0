import { styled } from 'styled-components'
import { colors as color, fonts as font } from '../../style/variable'

export const FooterContainer = styled.footer`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.grayLight};
`

export const Footer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: ${font.family.secondary};
  font-weight: ${font.weight.regular};
  color: ${color.grayDark};
`
