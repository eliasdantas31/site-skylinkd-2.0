import { useState, useRef } from 'react'
import { AvalitionsSectionContainer, Avalitions } from './style'

const avaliacoesData = [
  {
    id: 1,
    nome: 'Elias Lima Leite',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  },
  {
    id: 2,
    nome: 'Jonas Stabela',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  },
  {
    id: 3,
    nome: 'Gabriel Pereira',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  },
  {
    id: 4,
    nome: 'Rinshinnnnn',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  },
  {
    id: 5,
    nome: 'Felipe Tozzy',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  },
  {
    id: 6,
    nome: 'Yuri Vitti',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  },
  {
    id: 7,
    nome: 'Braia Zenes',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, accusamus corrupti debitis qui id nulla earum architecto? Corrupti veniam nobis enim molestiae.'
  }
]

const CARDS_VISIVEIS = 3

export const AvalitionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('left')
  const [animating, setAnimating] = useState(false)

  const handlePrev = () => {
    if (animating || currentIndex === 0) return
    setDirection('right') // Vem da esquerda
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 3)
      setAnimating(false)
    }, 400) // Tempo igual ao da animação no CSS
  }

  const handleNext = () => {
    if (animating || currentIndex >= avaliacoesData.length - CARDS_VISIVEIS)
      return
    setDirection('left') // Vem da direita
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 3)
      setAnimating(false)
    }, 400)
  }

  const avaliacoesVisiveis = avaliacoesData.slice(
    currentIndex,
    currentIndex + CARDS_VISIVEIS
  )

  return (
    <AvalitionsSectionContainer>
      <div className="text">
        <h1>NOSSOS CLIENTES</h1>
        <div className="arrows">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0 || animating}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentIndex >= avaliacoesData.length - CARDS_VISIVEIS ||
              animating
            }
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <Avalitions direction={direction} animating={animating}>
        {avaliacoesVisiveis.map((avaliacao) => (
          <div key={avaliacao.id} className="avaliation-card">
            <div className="avaliation-card-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="avaliation-card-text">
              <h1>{avaliacao.nome}</h1>
              <p>{avaliacao.texto}</p>
            </div>
          </div>
        ))}
      </Avalitions>
    </AvalitionsSectionContainer>
  )
}
