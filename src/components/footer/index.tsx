import {
  FooterContainer,
  Footer,
  FooterTopContent,
  FooterBottomContent
} from './style'

export const FooterComponent = () => {
  return (
    <>
      <FooterContainer>
        <Footer>
          <FooterTopContent>
            <div className="footer-social">
              <div className="title">
                <h1>SKYLINKD</h1>
                <p>Conectando os céus.</p>
              </div>
              <div className="links">
                <a href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
            <div className="footer-options">
              <div className="company">
                <h1>EMPRESA</h1>
                <a href="#">Sobre Nós</a>
              </div>
              <div className="help">
                <h1>AJUDA</h1>
                <a href="#">Suporte ao cliente</a>
                <a href="#">Politicas de Privacidade</a>
              </div>
              <div className="FQA">
                <h1>FQA</h1>
                <a href="#">Login</a>
                <a href="#">Sing-Up</a>
              </div>
            </div>
          </FooterTopContent>
          <FooterBottomContent>
            <p>© 2023 Skylinkd. Todos os direitos reservados.</p>
          </FooterBottomContent>
        </Footer>
      </FooterContainer>
    </>
  )
}
