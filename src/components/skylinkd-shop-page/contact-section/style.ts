import { styled } from 'styled-components'
import { colors as color, fonts as font } from '../../../style/variable'

export const Contact = styled.div`
  height: max-content;
  width: 90%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  padding: 3rem 3rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  font-family: ${font.family.secondary};
  background-color: ${color.black};
  color: ${color.white};
  position: relative;
  z-index: 10;
  margin-top: -6rem;
  margin-bottom: 3rem;

  div.links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    div {
      height: 45px;
      width: 80%;
      display: inherit;
      justify-content: center;
      align-items: center;
      background-color: ${color.white};
      border-radius: 10px;
      cursor: pointer;

      i {
        margin-right: 1rem;
        color: ${color.black};
      }

      a {
        text-decoration: none;
        color: ${color.black};
        font-family: ${font.family.secondary};
      }
    }
  }
`
