import {Container} from './styles'

export function Section2({title, children}) {
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}