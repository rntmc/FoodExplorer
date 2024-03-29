import { RxExit } from "react-icons/rx";
import { BsFillHexagonFill } from "react-icons/bs";
import { PiReceipt   } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import {List} from "@phosphor-icons/react"

import {useAuth} from "../../hooks/auth"
import { useQuantity } from "../../contexts/quantityContext";
import { useNavigate, Link } from "react-router-dom";

import { Button } from '../Button';
import { Input } from '../Input';

import {Container, Logout, Profile, Menu, OrderSummary} from './styles'

export function Header({onChange, onOpenMenu, ...rest}) {
  const {signOut, user} = useAuth();
  const { quantities } = useQuantity();

  const totalQuantity = Object.values(quantities).reduce((total, quantity) => total + quantity, 0)

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return(
    <Container {...rest}>

      <Menu onClick={onOpenMenu}>
        <List/>
      </Menu>


       <Profile>
        <BsFillHexagonFill/>
        <div>
          <span>food explorer</span>
          <strong className={user.role === "user" ? "user" : ""}>{user.role}</strong>
        </div>
      </Profile>
    
      <Input
        className="top-input"
        onChange={onChange}
        icon={IoIosSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      {
        user.role === "user" ?
        (
        <OrderSummary>
          <PiReceipt/>
          <p>{totalQuantity}</p>
        </OrderSummary>
        ) : (
          ""
        )
      }

      {
        user.role === "admin" ?
        (
        <Link to="/add-dish">
          <Button title="Novo prato" className="top-button"/>
        </Link>
        ) : (
        <Link to="/pedidos">
          <Button
            className="order-button"
            icon={PiReceipt}
            title={`Pedidos (${totalQuantity})`}
            />
        </Link>
        )
      }

      <Logout onClick={handleSignOut}>
        <RxExit/>
      </Logout>

    </Container>
  )
}