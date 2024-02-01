import { Container, Icon, Plate, Count } from "./styles";
import { MdFavoriteBorder, MdOutlineModeEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

import {Button} from "../Button"

export function Card({title, description, price, image, id}) {

  const imageUrl = `http://localhost:3333/files/${image}`

  return(
    <Container>
      <Icon>
        <Link to={`/edit-dish/${id}`}>
          <MdOutlineModeEdit/>
        </Link>
      </Icon>

      <Plate>
        <img src={imageUrl} alt={title}/>

        <div className="title">
          <Link to={`/dish/${id}`}>
            <h1>{title}</h1>
          </Link>
            <MdOutlineKeyboardArrowRight  />
        </div>

        <p>{description}</p>
        <span>R$ {price}</span>
      </Plate>

      <Count>
        <button className="subtract">
          <FaMinus/>
        </button>
        <strong>01</strong>

        <button className="add">
          <FaPlus/>
        </button>

        <Button title="incluir"/>
      </Count>

    </Container>
  )
}