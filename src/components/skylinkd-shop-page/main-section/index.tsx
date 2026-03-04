import {
  MainScectionfooter,
  MainSectionContainer,
  MainSectionImage,
  MainSectionText
} from './style'

export const MainSectionComponent = () => {
  return (
    <MainSectionContainer>
      <div className="main-section-content">
        <MainSectionText data-aos="fade-right">
          <h1>
            TEM UM MODELO ESPECÍFICO <br /> EM MENTE?
          </h1>
          <p>
            Quer imprimir um modelo exclusivo? Entre em <br /> contato conosco,
            envie seu arquivo 3D e nós <br /> faremos um orçamento personalizado{' '}
            <br />
            para você.
          </p>
          <a href="#">Ver Mais</a>
        </MainSectionText>
        <MainSectionImage data-aos="fade-left">
          <img
            src="https://skylinkd-2-0-imagens.vercel.app/impressora%203d.png"
            alt="main-section"
          />
        </MainSectionImage>
      </div>
      <MainScectionfooter>
        <img
          src="https://skylinkd-2-0-imagens.vercel.app/Bambu-Lab-Logo.webp"
          alt="Logo Bambu-Lab"
          data-aos="fade-up"
          data-aos-duration="500"
        />
        <img
          src="https://skylinkd-2-0-imagens.vercel.app/Voolt3D%20logo.png"
          alt="Logo Voolt3D"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <img
          src="https://skylinkd-2-0-imagens.vercel.app/creality%20logo.webp"
          alt="Logo Creality"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </MainScectionfooter>
    </MainSectionContainer>
  )
}
