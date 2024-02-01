import { RxExit } from "react-icons/rx";
import { BsFillHexagonFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import {useAuth} from "../../hooks/auth"

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { Input } from '../Input';

import {Container, Logout, Profile} from './styles'

export function Header({onChange, ...rest}) {
  const {signOut} = useAuth();

  return(
    <Container {...rest}>
      <Profile>
        <BsFillHexagonFill/>
        <div>
          <span>food explorer</span>
          <strong>Admin</strong>
        </div>
      </Profile>
    
      <Input
        onChange={onChange}
        icon={IoIosSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Link to="/add-dish">
        <Button title="Novo prato"/>
      </Link>

      <Link to="/">
        <Logout onClick={signOut}>
          <RxExit/>
        </Logout>
      </Link>

    </Container>
  )
}