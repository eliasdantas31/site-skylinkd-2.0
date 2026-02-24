import { styled } from 'styled-components'
import { colors as color, fonts as font } from '../../style/variable'

export const MainSectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.grayLight};

  div.main-section-content {
    height: max-content;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 10rem;
  }
`

export const MainSectionText = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  h1 {
    font-family: ${font.family.primary};
    font-weight: ${font.weight.black};
    font-size: 4.4rem;
    color: ${color.grayDark};
    cursor: default;
  }

  p {
    font-family: ${font.family.secondary};
    font-weight: ${font.weight.regular};
    font-size: 1.2rem;
    color: ${color.grayDark};
    cursor: default;
  }

  a {
    height: 50px;
    width: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${font.family.secondary};
    font-weight: ${font.weight.medium};
    font-size: 1.5rem;
    color: ${color.white};
    background-color: ${color.grayDark};
    border-radius: 15px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: ${color.grayMedium};
      transform: scale(1.1);
    }
  }
`

export const MainSectionImage = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    max-width: 600px;
    height: auto;
    transform: rotate(-10deg);
  }
`
export const MainScectionfooter = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0;
  background-color: ${color.black};

  img {
    height: 90px;
    width: auto;
  }
`
