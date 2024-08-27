import './App.css'
import { InteractiveCard } from './components/InteractiveCard'

function App() {
  const products = [
    {
      name: 'smartphone XYZ',
      price: 999.99,
      description: 'smartphone de R$999,99.',
      active: true,
    },
    {
      name: 'smartphone XYZ 2',
      price: 1000,
      description: 'smartphone de R$1000,00.'
    },
    {
      name: 'smartphone XYZ 3',
      price: 900,
      description: 'smartphone de R$900,00.'
    },
    {
      name: 'capinha smartphone XYZ',
      price: 15,
      description: 'capinha para o smartphone XYZ.'
    },
  ]

  return (
    <>
      <section className='interactive-cards-section'>
        {products.map((product) => {
          return (
            <InteractiveCard name={product.name} price={product.price} description={product.description} active={product.active}></InteractiveCard>
          )
        })}
      </section>
    </>
  )
}

export default App
