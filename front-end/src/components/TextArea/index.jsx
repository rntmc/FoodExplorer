import { Container, Title, StyledTextArea } from './styles'

export function TextArea({value, title, onChange, ...rest}) {
    
  return(
    <Container>
      <Title>{title}</Title>
      <StyledTextArea value={value} onChange={onChange} {...rest} />
    </Container>
  )
}