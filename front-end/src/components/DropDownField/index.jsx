import { Container } from "./styles"

export function DropDownField({title, value, onChange, ...rest}) {
  

  return (
    <Container>
      <h2>{title}</h2>
      <select value={value} onChange={onChange} title="Categoria">
        <option value={null}></option>
        <option value="Refeição">Refeição</option>
        <option value="Sobremesa">Sobremesa</option>
        <option value="Bebida">Bebida</option>
      </select>
    </Container>
  );
}