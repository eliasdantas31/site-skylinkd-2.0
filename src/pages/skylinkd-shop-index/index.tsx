import { Container } from './style'

import HeaderComponent from '../../components/header'
import { MainSectionComponent } from '../../components/skylinkd-shop-page/main-section'
import { ProductsSection } from '../../components/skylinkd-shop-page/Products-section'
import { AvalitionsSection } from '../../components/skylinkd-shop-page/avalitions-section'
import { ContactSection } from '../../components/skylinkd-shop-page/contact-section'
import { FooterComponent } from '../../components/footer'

export const SkylinkdShopIndex = () => {
  return (
    <>
      <HeaderComponent />
      <MainSectionComponent />
      <ProductsSection />
      <Container>
        <AvalitionsSection />
        <ContactSection />
        <FooterComponent />
      </Container>
    </>
  )
}
