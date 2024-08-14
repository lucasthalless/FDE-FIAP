interface Products {
  name: string,
  price: number,
  description: string,
  active?: boolean,
}

export function InteractiveCard({name, price, description, active}: Products){
  return (
    <div className={`interactive-card ${active === true ? 'active' : ''}`}>
      <h1>{name}</h1>
      <p>Preço: R$ {price}</p>
      <p>Descrição: {description}</p>
    </div>
  )
}