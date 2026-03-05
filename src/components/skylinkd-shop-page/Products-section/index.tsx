import {
  Products,
  ProductsSectionContainer,
  ProductsSectionContent,
  SearchByGroup
} from './style'

export const ProductsSection = () => {
  return (
    <ProductsSectionContainer>
      <ProductsSectionContent id="new-products">
        <h1>NOVOS PRODUTOS</h1>
        <Products>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
        </Products>
        <div>
          <a className="see-all" href="#">
            Ver Todos
          </a>
        </div>
      </ProductsSectionContent>
      <ProductsSectionContent id="best-sellers">
        <h1>MAIS VENDIDOS</h1>
        <Products>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
          <div className="Products-item">
            <img
              src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
              alt="Produto 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                exercitationem a ex eum ea
              </p>
              <h2>R$200</h2>
            </div>
          </div>
        </Products>
        <div>
          <a className="see-all" href="#">
            Ver Todos
          </a>
        </div>
      </ProductsSectionContent>
      <ProductsSectionContent darkVersion id="search-by-group">
        <h1>PROCURE POR GRUPO</h1>
        <SearchByGroup>
          {/* Linha 1: Pequeno | Grande */}
          <div className="options">
            <div className="option-small">
              <h1>Brinquedos</h1>
              <img src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png" />
            </div>
            <div className="option-big">
              <h1>Utilidades / Decorações</h1>
              <img src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png" />
            </div>
          </div>

          {/* Linha 2: Grande | Pequeno */}
          <div className="options">
            <div className="option-big">
              <h1>Peças Técnicas / Ferramentas</h1>
              <img src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png" />
            </div>
            <div className="option-small">
              <h1>Geek</h1>
              <img src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png" />
            </div>
          </div>
        </SearchByGroup>
      </ProductsSectionContent>
    </ProductsSectionContainer>
  )
}
