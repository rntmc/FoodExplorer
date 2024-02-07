import {Container, BannerImage } from './styles'

import banner from "../../assets/banner.png"

export function Banner() {
  return(
    <Container>
        <BannerImage  src={banner} alt="Banner"/>
      <div className='bg'>
        <h1>Sabores inigualáveis</h1>
        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
      </div>
    </Container>
  )
}