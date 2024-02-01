import { Container } from "./styles";

export function Input({icon: Icon, onChange, ...rest}) {
  return(
    <Container> 
      {Icon && <Icon size={20}/>}
      <input {...rest} onChange={onChange}/>
    </Container>
  )
}