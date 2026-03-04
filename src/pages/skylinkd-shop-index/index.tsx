import HeaderComponent from '../../components/header'
import { MainSectionComponent } from '../../components/skylinkd-shop-page/main-section'
import { ProductsSection } from '../../components/skylinkd-shop-page/Products-section'
import { ContactSection } from '../../components/skylinkd-shop-page/contact-section'

export const SkylinkdShopIndex = () => {
  return (
    <>
      <HeaderComponent />
      <MainSectionComponent />
      <ProductsSection />
      <ContactSection />
    </>
  )
}
