import {Container} from './styles'

export function Section({title, children, className}) {
  return(
    <Container className={className}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}