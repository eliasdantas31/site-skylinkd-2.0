import { styled } from 'styled-components'
import { colors as color, fonts as font } from '../../style/variable'

export const FooterContainer = styled.footer`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.grayLight};
  padding: 5rem 5rem 3rem 5rem;
`

export const Footer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: ${font.family.secondary};
  font-weight: ${font.weight.regular};
  color: ${color.grayDark};
`

export const FooterTopContent = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;

  div.footer-social {
    display: flex;
    flex-direction: column;

    div.title {
      text-align: start;
      margin-bottom: 1rem;
      h1 {
        font-size: 2.5rem;
        font-family: ${font.family.primary};
      }
    }

    div.links {
      display: flex;
      gap: 2rem;

      a {
        font-size: 1.5rem;
        color: ${color.grayDark};
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  div.footer-options {
    display: flex;
    gap: 5rem;

    div.company,
    div.help,
    div.FQA {
      display: flex;
      flex-direction: column;
      text-align: start;
      gap: 1rem;

      h1 {
        font-size: 1.5rem;
        font-family: ${font.family.secondary};
      }

      a {
        color: ${color.grayDark};
        text-decoration: none;
      }
    }
  }
`

export const FooterBottomContent = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid ${color.grayMedium};
`
