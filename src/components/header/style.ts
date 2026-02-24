import styled from 'styled-components'
import { colors as color, fonts as font } from '../../style/variable'

export const Header = styled.header`
  height: max-content;
  width: 100%;
  position: fixed;
  background-color: ${color.white};
  z-index: 1000;
`

export const HeaderTop = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${color.black};
  color: ${color.white};
  position: relative;

  p {
    font-size: 1.1rem;
    font-family: ${font.family.secondary};
    font-weight: ${font.weight.regular};
    text-align: center;

    a {
      color: ${color.white};
      text-decoration: underline;
      font-weight: ${font.weight.medium};
    }
  }

  button {
    position: absolute;
    right: 5.2%;
    color: ${color.white};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const HeaderContainerShop = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.4rem 4rem;

  h1 {
    color: ${color.black};
    font-size: 2rem;
    font-family: ${font.family.primary};
    font-weight: ${font.weight.black};
  }

  ul {
    display: flex;
    gap: 26px;
    li {
      list-style: none;
      position: relative;

      a {
        text-decoration: none;
        color: ${color.grayDark};
        font-size: 1.1rem;
        font-family: ${font.family.secondary};
        font-weight: ${font.weight.regular};
        display: inline-block;
        padding-bottom: 4px;

        i {
          font-size: 1.4rem;
        }
      }
    }
  }

  ul.header-shop-menu {
    li {
      a {
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: ${color.black};
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${color.grayLight};
  padding: 8px 16px;
  border-radius: 22px;
  width: 800px;

  label {
    cursor: pointer;
    i {
      font-size: 1.1rem;
      color: ${color.grayMedium};
    }
  }

  input {
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 1.1rem;
    font-family: ${font.family.secondary};
    font-weight: ${font.weight.regular};
    width: 100%;
    color: ${color.black};

    &::placeholder {
      color: ${color.grayMedium};
    }
  }
`
