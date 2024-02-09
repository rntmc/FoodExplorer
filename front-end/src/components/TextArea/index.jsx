import { Container, Title, StyledTextArea } from './styles'

export function TextArea({value, title, onChange, className, ...rest}) {
    
  return(
    <Container className={className}>
      <Title>{title}</Title>
      <StyledTextArea value={value} onChange={onChange} {...rest} />
    </Container>
  )
}