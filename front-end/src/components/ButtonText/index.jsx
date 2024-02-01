
import { Container } from "./styles";

import {MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function ButtonText({title, ...rest}) {
  return(
    <Container {...rest}>
      <MdOutlineKeyboardArrowLeft/>
      {title}
    </Container>
  )
}