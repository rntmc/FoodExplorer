import { Container } from "./styles"

export function TextField({title,value, onChange, ...rest}) {

  return (
    <Container>
      <h2>{title}</h2>
      <input {...rest} value={value} onChange={onChange} type="text" />
    </Container>

  )
}