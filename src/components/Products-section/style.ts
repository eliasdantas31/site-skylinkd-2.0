import { styled } from 'styled-components'
import { colors as color, fonts as font } from '../../style/variable'

export const ProductsSectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding: 5rem 10rem;
  background-color: ${color.grayLight};
`

export const ProductsSectionContent = styled.div<{ darkVersion: boolean }>`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  margin-bottom: 5rem;
  background-color: ${(props) =>
    props.darkVersion ? color.black : color.white};
  border-radius: 10px;
  gap: 3rem;
  cursor: pointer;

  h1 {
    font-family: ${font.family.primary};
    font-weight: ${font.weight.black};
    font-size: 3.5rem;
    color: ${(props) => (props.darkVersion ? color.white : color.grayDark)};
    cursor: default;
  }

  div {
    height: max-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a.see-all {
      font-family: ${font.family.primary};
      font-weight: ${font.weight.regular};
      font-size: 1rem;
      color: ${color.black};
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const Products = styled.div`
  height: max-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;

  div.Products-item {
    height: max-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    div {
      height: max-content;
      width: 100%;
      h2 {
        font-family: ${font.family.primary};
        font-weight: ${font.weight.bold};
        font-size: 1.5rem;
        color: ${color.grayDark};
        cursor: default;
      }

      p {
        font-family: ${font.family.primary};
        font-weight: ${font.weight.regular};
        font-size: 1rem;
        color: ${color.grayDark};
        cursor: default;
      }
    }
  }
`

export const SearchByGroup = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div.options {
    height: max-content;
    width: 100%;
    display: flex;
    gap: 1.5rem;

    div.option-small,
    div.option-big {
      height: 16rem;
      position: relative;
      background-color: ${color.white};
      border-radius: 20px;
      overflow: hidden;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.01);
      }

      h1 {
        /* Posicionamento exato no canto superior esquerdo */
        position: absolute;
        top: 25px;
        left: 35px;

        font-family: ${font.family.primary};
        font-weight: ${font.weight.bold};
        font-size: 2.2rem;
        color: ${color.black};
        z-index: 2;
        margin: 0;
      }

      img {
        position: absolute;
        /* Imagem no canto inferior direito para equilibrar com o texto */
        right: -10px;
        bottom: -10px;
        height: 100%; // Ajuste para 100% ou 110% dependendo da sua imagem
        width: auto;
        object-fit: contain;
        z-index: 1;
      }
    }

    div.option-small {
      width: 40%;
    }

    div.option-big {
      width: 60%;
    }
  }
`
