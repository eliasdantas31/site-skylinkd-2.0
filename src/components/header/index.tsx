import { useState } from 'react'
import {
  Header,
  HeaderContainerShop,
  SearchContainer,
  HeaderTop
} from './style'

const HeaderComponent = () => {
  const [headerTopOn, setHeaderTopOn] = useState(true)

  return (
    <Header>
      {headerTopOn && (
        <HeaderTop>
          <p>
            Loge-se para favoritar os melhores modelos na sua opinião{' '}
            <a href="#">Entrar</a>
          </p>
          <button onClick={() => setHeaderTopOn(!headerTopOn)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </HeaderTop>
      )}
      <HeaderContainerShop>
        <div>
          <h1>SKYLINKD.SHOP</h1>
        </div>

        <ul className="header-shop-menu">
          <li>
            <a href="#new-products">Novidades</a>
          </li>
          <li>
            <a href="#best-sellers">Melhores</a>
          </li>
          <li>
            <a href="#search-by-group">Grupos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>

        <SearchContainer>
          <label htmlFor="search-input">
            <i className="bi bi-search"></i>
          </label>
          <input
            id="search-input"
            type="text"
            placeholder="Procure por produtos..."
          />
        </SearchContainer>
        <ul>
          <li>
            <a href="#">
              <i className="bi bi-cart"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-circle"></i>
            </a>
          </li>
        </ul>
      </HeaderContainerShop>
    </Header>
  )
}

export default HeaderComponent
