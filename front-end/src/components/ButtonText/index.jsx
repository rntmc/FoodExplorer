
import { Container } from "./styles";

import {MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function ButtonText({title, className, ...rest}) {
  return(
    <Container {...rest} className={className}>
      <MdOutlineKeyboardArrowLeft/>
      {title}
    </Container>
  )
}