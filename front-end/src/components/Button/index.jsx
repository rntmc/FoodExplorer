import { Container } from "./styles";

export function Button({title,icon: Icon, className,children, ...rest}){
  return(
    <Container type="button" className={className} {...rest}>
      {Icon && <Icon />}
      {title}
      {children}
    </Container>
  )
}