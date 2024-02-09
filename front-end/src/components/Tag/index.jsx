import { Container } from './styles'

export function Tag({title, className}) {
  return(
    <Container className={className}>
      {title}
    </Container>
  )
}