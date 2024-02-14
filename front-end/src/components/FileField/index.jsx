import { Container } from "./styles"
import { PiUploadSimple } from "react-icons/pi";

export function FileField({title, onChange, ...rest}) {

  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <input {...rest} type="file" onChange={onChange}/> 
        <PiUploadSimple/>
        <span>Selecione imagem</span>
      </div>
    </Container>
  )
}