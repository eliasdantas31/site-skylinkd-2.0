import { styled, keyframes } from 'styled-components'
import { colors as color, fonts as font } from '../../../style/variable'

// Animação vindo da direita (seta →)
const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

// Animação vindo da esquerda (seta ←)
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AvalitionsSectionContainer = styled.section`
  height: max-content;
  width: 100%;
  padding: 1rem 5rem 10rem 5rem;
  background-color: ${color.white};
  overflow: hidden;

  div.text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
      font-family: ${font.family.primary};
      font-weight: ${font.weight.black};
      font-size: 3.5rem;
    }

    div.arrows {
      display: flex;
      gap: 1rem;

      button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: none;
        background-color: ${color.grayLight};
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;

        &:hover:not(:disabled) {
          background-color: ${color.black};
          color: ${color.white};
        }

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      }
    }
  }
`

export const Avalitions = styled.div<{
  direction: 'left' | 'right'
  animating: boolean
}>`
  height: max-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  animation: ${(props) =>
      props.animating
        ? props.direction === 'left'
          ? slideInFromRight
          : slideInFromLeft
        : 'none'}
    0.4s ease forwards;

  div.avaliation-card {
    height: max-content;
    width: 100%;
    padding: 2rem;
    border: 1px solid ${color.grayLight};
    border-radius: 10px;

    div.avaliation-card-stars {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      color: yellow;
    }

    div.avaliation-card-text {
      h1 {
        font-size: 1.5rem;
        font-family: ${font.family.primary};
        margin-bottom: 10px;
      }

      p {
        font-family: ${font.family.primary};
        color: ${color.grayMedium};
      }
    }
  }
`
