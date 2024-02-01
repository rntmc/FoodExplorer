import {Container} from './styles'

import { BsFillHexagonFill } from "react-icons/bs";

export function Footer() {
  return(
    <Container>
      <div>
        <BsFillHexagonFill/>
        <span>food explorer</span>
      </div>

      <p>
      © 2024 - Todos os direitos reservados.
      </p>      
    </Container>
  )
}