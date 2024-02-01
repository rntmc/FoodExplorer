import { Container } from "./styles";

export function Button({title, className, ...rest}){
  return(
    <Container type="button" className={className} {...rest}>
      {title}
    </Container>
  )
}