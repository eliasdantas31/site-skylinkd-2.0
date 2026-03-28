import { Contact } from './style'

export const ContactSection = () => {
  return (
    <Contact>
      <div className="text">
        <h1>
          ENTRE EM CONTATO
          <br />
          COM A GENTE!
        </h1>
      </div>
      <div className="links">
        <div>
          <i className="bi bi-whatsapp"></i>
          <a href="#">Whatsapp</a>
        </div>
        <div>
          <i className="bi bi-instagram"></i>
          <a href="#">Instagram</a>
        </div>
      </div>
    </Contact>
  )
}
