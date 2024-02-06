import { useState } from "react";
import {useAuth} from "../../hooks/auth";
import { useQuantity } from "../../contexts/quantityContext";
import { Container, Icon, Plate, Count } from "./styles";
import { MdFavoriteBorder, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiPencilSimpleLight } from "react-icons/pi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

import {Button} from "../Button"

export function Card({title, description, price, image, id}) {
  const [count, setCount] = useState(0);
  const { incrementQuantity, setQuantityToZero } = useQuantity();
  const {user} = useAuth();
  const imageUrl = `http://localhost:3333/files/${image}`

  const handleInclude = () => {
    if (count > 0) {
      incrementQuantity(id, count);
      setCount(0);
    } else {
      setQuantityToZero(id);
    }
  };

  return(
    <Container>
      <Icon>
        {
          user.role === "admin" ? 
          (
            <Link to={`/edit-dish/${id}`}>
              <PiPencilSimpleLight />
            </Link>
          ) : (
            <Link to={`/orders`}>
              <MdFavoriteBorder/>
            </Link>
          )
        }
      </Icon>

      <Plate hasCount={user.role !== "admin"}>
        <img src={imageUrl} alt={title}/>
        
        <div className="title">
          <Link to={`/dish/${id}`}>
            <strong>
              {title} &gt;
            </strong>
          </Link>
        </div>

        <p>{description}</p>
        <span>R$ {price}</span>
      </Plate>
      
      {
        user.role === "admin" ? (
          ""
        ) : (
          <Count>
            <button className="subtract" onClick={() => setCount((count) => Math.max(count - 1, 0))}>
              <FaMinus/>
            </button>

            <strong>{count}</strong>

            <button className="add" onClick={() => setCount((count) => count + 1)}>
              <FaPlus/>
            </button>

            <Button title="incluir" onClick={handleInclude}/>
          </Count>
        )
      }

    </Container>
  )
}