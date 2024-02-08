import { Container } from "./styles";

export function Input({icon: Icon, onChange, className, ...rest}) {
  return(
    <Container className={className}> 
      {Icon && <Icon size={20}/>}
      <input {...rest} onChange={onChange}/>
    </Container>
  )
}