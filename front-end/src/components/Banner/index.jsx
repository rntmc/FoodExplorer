import {Container} from './styles'

import banner from "../../assets/banner.png"

export function Banner() {
  return(
    <Container>
        <img src={banner} alt="Banner"/>
      <div>
        <h1>Sabores inigualáveis</h1>
        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
      </div>
    </Container>
  )
}